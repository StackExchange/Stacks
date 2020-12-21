namespace Stacks {
    export class TabListController extends Stacks.StacksController {

        private boundSelectTab: any; // (event: MouseEvent) => void;
        private boundHandleKeydown: any // (event: KeyboardEvent) => void;

        connect() {
            super.connect();

            this.boundSelectTab = this.selectTab.bind(this);
            this.boundHandleKeydown = this.handleKeydown.bind(this);

            for (let tab of this.tabTargets) {
                tab.addEventListener("click", this.boundSelectTab);
                tab.addEventListener("keydown", this.boundHandleKeydown);
            }
        }

        disconnect() {
            super.disconnect();

            for (let tab of this.tabTargets) {
                tab.removeEventListener("click", this.boundSelectTab);
                tab.removeEventListener("keydown", this.boundHandleKeydown);
            }
        }

        get tabTargets() {
            return Array.from(this.element.querySelectorAll("[role=tab]"));
        }

        selectTab(event: MouseEvent) {
            this.selectedTab = <Element>event.currentTarget;
        }

        handleKeydown(event: KeyboardEvent) {
            let tabElement = <Element>event.currentTarget;

            var tabs = this.tabTargets;
            var tabIndex = tabs.indexOf(tabElement);
    
            if (event.key === "ArrowRight") {
                tabIndex++;
            } else if (event.key === "ArrowLeft") {
                tabIndex--;
            } else {
                return;
            }
    
            if (tabIndex < 0) { tabIndex = tabs.length - 1; }
            if (tabIndex >= tabs.length) { tabIndex = 0; }

            tabElement = tabs[tabIndex];
   
            this.selectedTab = tabElement;
        }

        
        public get selectedTab() : Element | null {
            return this.tabTargets.find(e => e.getAttribute("aria-selected") === "true") || null;
        }
        
        public set selectedTab(selectedTab: Element | null) {
            for (let tab of this.tabTargets) {
                let panelId = tab.getAttribute('aria-controls');
                let panel = panelId ? document.getElementById(panelId) : null;
    
                if (tab === selectedTab) {
                    tab.classList.add('is-selected');
                    tab.setAttribute('aria-selected', 'true');
                    tab.removeAttribute('tabindex');
                    panel?.classList.remove('d-none');
                } else {
                    tab.classList.remove('is-selected');
                    tab.setAttribute('aria-selected', 'false');
                    tab.setAttribute('tabindex', '-1');
                    panel?.classList.add('d-none');
                }
            }

            if (selectedTab instanceof HTMLElement) {
                selectedTab.focus();
            }
        }
    }
}
Stacks.application.register("s-tablist", Stacks.TabListController);
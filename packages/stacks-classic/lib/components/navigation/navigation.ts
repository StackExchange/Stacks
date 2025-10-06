import * as Stacks from "../../stacks";

export class TabListController extends Stacks.StacksController {
    private boundSelectTab!: (event: MouseEvent) => void;
    private boundHandleKeydown!: (event: KeyboardEvent) => void;

    connect() {
        super.connect();

        this.boundSelectTab = this.selectTab.bind(this);
        this.boundHandleKeydown = this.handleKeydown.bind(this);

        for (const tab of this.tabTargets) {
            tab.addEventListener("click", this.boundSelectTab);
            tab.addEventListener("keydown", this.boundHandleKeydown);
        }
    }

    disconnect() {
        super.disconnect();

        for (const tab of this.tabTargets) {
            tab.removeEventListener("click", this.boundSelectTab);
            tab.removeEventListener("keydown", this.boundHandleKeydown);
        }
    }

    /**
     * Gets all tabs within the controller.
     */
    get tabTargets(): HTMLElement[] {
        return Array.from(this.element.querySelectorAll("[role=tab]"));
    }

    /**
     * Handles click events on individual tabs, causing them to be selected.
     */
    selectTab(event: MouseEvent) {
        this.switchToTab(<HTMLElement>event.currentTarget);
    }

    /**
     * Handles left and right arrow keydown events on individual tabs,
     * selecting the adjacent tab corresponding to the event.
     */
    handleKeydown(event: KeyboardEvent) {
        let tabElement = <HTMLElement>event.currentTarget;

        const tabs = this.tabTargets;
        let tabIndex = tabs.indexOf(tabElement);

        if (event.key === "ArrowRight") {
            tabIndex++;
        } else if (event.key === "ArrowLeft") {
            tabIndex--;
        } else {
            return;
        }

        // Use circular navigation when users go past the first or last tab.
        if (tabIndex < 0) {
            tabIndex = tabs.length - 1;
        }
        if (tabIndex >= tabs.length) {
            tabIndex = 0;
        }

        tabElement = tabs[tabIndex];
        this.switchToTab(tabElement);

        // Focus the newly selected tab so it can receive keyboard events.
        this.selectedTab?.focus();
    }

    /**
     * Attempts to switch to a new tab, doing nothing if the tab is already selected or
     * the s-navigation-tablist:select event is prevented.
     */
    private switchToTab(newTab: HTMLElement) {
        const oldTab = this.selectedTab;
        if (oldTab === newTab) {
            return;
        }

        if (this.triggerEvent("select", { oldTab, newTab }).defaultPrevented) {
            return;
        }

        this.selectedTab = newTab;
        this.triggerEvent("selected", { oldTab, newTab });
    }

    /**
     * Returns the currently selected tab or null if no tabs are selected.
     */
    public get selectedTab(): HTMLElement | null {
        return (
            this.tabTargets.find(
                (e) => e.getAttribute("aria-selected") === "true"
            ) || null
        );
    }

    /**
     * Switches the tablist to the provided tab, updating the tabs and panels
     * to reflect the change.
     * @param selectedTab The tab to select. If `null` is provided or the element
     * is not a valid tab, all tabs will be unselected.
     */
    public set selectedTab(selectedTab: HTMLElement | null) {
        for (const tab of this.tabTargets) {
            const panelId = tab.getAttribute("aria-controls");
            const panel = panelId ? document.getElementById(panelId) : null;

            if (tab === selectedTab) {
                tab.classList.add("is-selected");
                tab.setAttribute("aria-selected", "true");
                tab.removeAttribute("tabindex");
                panel?.classList.remove("d-none");
            } else {
                tab.classList.remove("is-selected");
                tab.setAttribute("aria-selected", "false");
                tab.setAttribute("tabindex", "-1");
                panel?.classList.add("d-none");
            }
        }
    }
}

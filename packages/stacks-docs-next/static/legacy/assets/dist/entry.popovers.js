/******/ (() => { // webpackBootstrap
/*!*************************************!*\
  !*** ./assets/js/entry.popovers.js ***!
  \*************************************/
$(document).ready(function() {
    Stacks.setTooltipText(document.querySelector(".js-text-tooltip-example"), "Only members of this Team can see the information posted here. It will never be shared publicly or accessible outside of your Team.", { placement: "top-start" });
    Stacks.setTooltipHtml(document.querySelector(".js-html-tooltip-example"), "View all questions with <span class='s-tag'>stacks</span>", { placement: "top-end" });

    Stacks.addController("section", {
        targets: ["help"],
        showHelp(e) { Stacks.showPopover(this.helpTarget); e.stopPropagation(); },
        hideHelp(e) { Stacks.hidePopover(this.helpTarget); },
    });

    Stacks.addController("actions", {
        loaded: false,
        load() {
            if (this.loaded) { return; }
            setTimeout(() => {
                Stacks.attachPopover(this.element, `<div class="s-popover wmx1 p8"><ul class="s-menu" role="menu"><li class="s-menu--item" role="menuitem"><button class="s-menu--action">Share</button></li><li class="s-menu--item" role="menuitem"><button class="s-menu--action">Edit</button></li><li class="s-menu--item" role="menuitem"><button class="s-menu--action">Flag</button></li><li class="s-menu--divider mxn8" role="separator"></li><li class="s-menu--item" role="menuitem"><button class="s-menu--action s-menu--action__danger">Delete</button></li></ul></div>`, { autoShow: true, toggleOnClick: true, placement: "bottom" });
                this.loaded = true;
            });
        },
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkucG9wb3ZlcnMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsdU5BQXVOLHdCQUF3QjtBQUMvTyw2SUFBNkksc0JBQXNCOztBQUVuSztBQUNBO0FBQ0Esc0JBQXNCLHFDQUFxQyxzQkFBc0I7QUFDakYsc0JBQXNCLHNDQUFzQztBQUM1RCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLDJqQkFBMmpCLDBEQUEwRDtBQUNybkI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN0YWNrb3ZlcmZsb3cvc3RhY2tzLWRvY3MvLi9hc3NldHMvanMvZW50cnkucG9wb3ZlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgU3RhY2tzLnNldFRvb2x0aXBUZXh0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGV4dC10b29sdGlwLWV4YW1wbGVcIiksIFwiT25seSBtZW1iZXJzIG9mIHRoaXMgVGVhbSBjYW4gc2VlIHRoZSBpbmZvcm1hdGlvbiBwb3N0ZWQgaGVyZS4gSXQgd2lsbCBuZXZlciBiZSBzaGFyZWQgcHVibGljbHkgb3IgYWNjZXNzaWJsZSBvdXRzaWRlIG9mIHlvdXIgVGVhbS5cIiwgeyBwbGFjZW1lbnQ6IFwidG9wLXN0YXJ0XCIgfSk7XG4gICAgU3RhY2tzLnNldFRvb2x0aXBIdG1sKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtaHRtbC10b29sdGlwLWV4YW1wbGVcIiksIFwiVmlldyBhbGwgcXVlc3Rpb25zIHdpdGggPHNwYW4gY2xhc3M9J3MtdGFnJz5zdGFja3M8L3NwYW4+XCIsIHsgcGxhY2VtZW50OiBcInRvcC1lbmRcIiB9KTtcblxuICAgIFN0YWNrcy5hZGRDb250cm9sbGVyKFwic2VjdGlvblwiLCB7XG4gICAgICAgIHRhcmdldHM6IFtcImhlbHBcIl0sXG4gICAgICAgIHNob3dIZWxwKGUpIHsgU3RhY2tzLnNob3dQb3BvdmVyKHRoaXMuaGVscFRhcmdldCk7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0sXG4gICAgICAgIGhpZGVIZWxwKGUpIHsgU3RhY2tzLmhpZGVQb3BvdmVyKHRoaXMuaGVscFRhcmdldCk7IH0sXG4gICAgfSk7XG5cbiAgICBTdGFja3MuYWRkQ29udHJvbGxlcihcImFjdGlvbnNcIiwge1xuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBsb2FkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RhY2tzLmF0dGFjaFBvcG92ZXIodGhpcy5lbGVtZW50LCBgPGRpdiBjbGFzcz1cInMtcG9wb3ZlciB3bXgxIHA4XCI+PHVsIGNsYXNzPVwicy1tZW51XCIgcm9sZT1cIm1lbnVcIj48bGkgY2xhc3M9XCJzLW1lbnUtLWl0ZW1cIiByb2xlPVwibWVudWl0ZW1cIj48YnV0dG9uIGNsYXNzPVwicy1tZW51LS1hY3Rpb25cIj5TaGFyZTwvYnV0dG9uPjwvbGk+PGxpIGNsYXNzPVwicy1tZW51LS1pdGVtXCIgcm9sZT1cIm1lbnVpdGVtXCI+PGJ1dHRvbiBjbGFzcz1cInMtbWVudS0tYWN0aW9uXCI+RWRpdDwvYnV0dG9uPjwvbGk+PGxpIGNsYXNzPVwicy1tZW51LS1pdGVtXCIgcm9sZT1cIm1lbnVpdGVtXCI+PGJ1dHRvbiBjbGFzcz1cInMtbWVudS0tYWN0aW9uXCI+RmxhZzwvYnV0dG9uPjwvbGk+PGxpIGNsYXNzPVwicy1tZW51LS1kaXZpZGVyIG14bjhcIiByb2xlPVwic2VwYXJhdG9yXCI+PC9saT48bGkgY2xhc3M9XCJzLW1lbnUtLWl0ZW1cIiByb2xlPVwibWVudWl0ZW1cIj48YnV0dG9uIGNsYXNzPVwicy1tZW51LS1hY3Rpb24gcy1tZW51LS1hY3Rpb25fX2RhbmdlclwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+PC91bD48L2Rpdj5gLCB7IGF1dG9TaG93OiB0cnVlLCB0b2dnbGVPbkNsaWNrOiB0cnVlLCBwbGFjZW1lbnQ6IFwiYm90dG9tXCIgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=
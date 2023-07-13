var groupTabs = document.querySelectorAll("[data-tab]");
var groupTabPanels = document.querySelectorAll("[data-tabpanel]");

console.log({groupTabs, groupTabPanels});

groupTabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
        var activeTab = tab.getAttribute("data-tab");
        var activePanels = document.querySelectorAll(`[data-tabpanel="${activeTab}"]`);

        groupTabPanels.forEach(function(panel) {
            panel.classList.add("d-none");
            activePanels.forEach((activePanel) => {
                activePanel.classList.remove("d-none");
            });
        });
    });
});

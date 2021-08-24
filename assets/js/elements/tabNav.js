// TODO, use ondomload to add the event listener

(function main() {
    document.querySelectorAll(".tab-item").forEach(filter => {
        filter.addEventListener('click', function (event) {
            tabSwitch(event);
            panelSwitch(event);
        });
    });
    return
})();

function tabSwitch(event) {
    let selectedTab = event.currentTarget;
    let allTabs = event.currentTarget.parentElement.children;
    for (const tab of allTabs) {
        if (tab.classList.contains('tab-item')) {
            tab.classList.remove('selected');
        }
    }
    selectedTab.classList.add('selected');
}

function panelSwitch(event) {
    let selectedId = event.currentTarget.dataset.panelId;
    let allIds = (function* () {
        let allTabs = event.currentTarget.parentElement.children;
        for (const tab of allTabs) {
            yield tab.dataset.panelId;
        }
    })();
    for (const id of allIds) {
        let panel = document.querySelector(id);
        if (panel.classList.contains('tab-panel')) {
            panel.classList.remove('reveal');
        }
    }
    document.querySelector(selectedId).classList.add('reveal');
}
export class AboutTab {
    constructor() {
        this.title = "About Tabs";
        this.codeJs = "codeJs";
        this.codeHtml = "codeHtml";

        this.tabs = [
            { objId: "tabId1", name: "Name1", viewModel: "about/components/aboutTabs/aboutTabOne", active: false },
            { objId: "tabId2", name: "Name2", viewModel: "about/components/aboutTabs/aboutTabTwo", active: true },
            { objId: "tabId3", name: "Name3", viewModel: "about/components/aboutTabs/aboutTabThree", active: false },
        ];

        this.tabsPrimary = [
            { objId: "tabId4", name: "Name4", viewModel: "about/components/aboutTabs/aboutTabOne", active: false },
            { objId: "tabId5", name: "Name5", viewModel: "about/components/aboutTabs/aboutTabTwo", active: true },
            { objId: "tabId6", name: "Name6", viewModel: "about/components/aboutTabs/aboutTabThree", active: false },
        ];
        this.tabsSucess = [
            { objId: "tabId7", name: "Name7", viewModel: "about/components/aboutTabs/aboutTabOne", active: false },
            { objId: "tabId8", name: "Name8", viewModel: "about/components/aboutTabs/aboutTabTwo", active: true },
            { objId: "tabId9", name: "Name9", viewModel: "about/components/aboutTabs/aboutTabThree", active: false },
        ];

        this.tabsInfo= [
            { objId: "tabId11", name: "Name11", viewModel: "about/components/aboutTabs/aboutTabOne", active: false },
            { objId: "tabId12", name: "Name12", viewModel: "about/components/aboutTabs/aboutTabTwo", active: true },
            { objId: "tabId13", name: "Name13", viewModel: "about/components/aboutTabs/aboutTabThree", active: false },
        ];
        this.tabsWarning = [
            { objId: "tabId14", name: "Name14", viewModel: "about/components/aboutTabs/aboutTabOne", active: false },
            { objId: "tabId15", name: "Name15", viewModel: "about/components/aboutTabs/aboutTabTwo", active: true },
            { objId: "tabId16", name: "Name16", viewModel: "about/components/aboutTabs/aboutTabThree", active: false },
        ];

        this.tabsDanger= [
            { objId: "tabId17", name: "Name17", viewModel: "about/components/aboutTabs/aboutTabOne", active: false },
            { objId: "tabId18", name: "Name18", viewModel: "about/components/aboutTabs/aboutTabTwo", active: true },
            { objId: "tabId19", name: "Name19", viewModel: "about/components/aboutTabs/aboutTabThree", active: false },
        ];
    }
}
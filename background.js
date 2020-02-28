chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete') {
        chrome.tabs.query({active: true}, function(tabs) {
            var tab = tabs[0];
            var tablink = tab.url;
            let re = /^https:\/\/([a-z0-9-]+)?(?:\.)?console\.aws\.amazon\.com\/([a-z0-9-]+)\/([a-z0-9]+(?=\/))?.*/;
            let m = re.exec(tablink);
            if (!m || m.length !== 4) return;

            let svc = m[2];
            if (svc === "codesuite") svc = m[3];

            chrome.tabs.executeScript(tabId, {
                file: 'change.js',
            }, function() {
                const u = chrome.runtime.getURL("services/" + svc + ".png");
                fetch(u)
                    .then(function(response) {
                        if (response.ok) {
                            chrome.tabs.sendMessage(tabId, {scriptOptions: {url: u}});
                        }
                    }).catch(function(error) {});
            });
        });
    }
});
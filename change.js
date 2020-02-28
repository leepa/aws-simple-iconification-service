chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    var scriptOptions = message.scriptOptions;
    document.head = document.head || document.getElementsByTagName('head')[0];

    function changeFavicon(src) {
        var x = document.querySelector("link[rel*='shortcut icon']");
        if (x) document.head.removeChild(x);

        var link = document.createElement('link'),
        oldLink = document.querySelector("link[rel*='icon']");
        link.id = 'dynamic-favicon';
        link.rel = 'icon';
        link.href = src;
        if (oldLink) document.head.removeChild(oldLink);
        document.head.appendChild(link);
    }

    changeFavicon(scriptOptions.url);
});
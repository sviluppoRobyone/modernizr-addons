(function () {
    if (!!window["Modernizr"]) {
        var ua = navigator.userAgent.toLowerCase();
        Modernizr.addTest("ie", function () { return ua.indexOf("msie") !== -1; });
        [6, 7, 8, 9, 10, 11, 12].forEach(function (versionNumber) {
            Modernizr.addTest("ie" + versionNumber, function () { return navigator.userAgent.indexOf("msie " + versionNumber) !== -1; });
        });
        Modernizr.addTest("edge", function () { return ua.indexOf("edge") !== -1; });
        Modernizr.addTest("chrome", function () { return ua.indexOf("chrome") !== -1; });
        Modernizr.addTest("firefox", function () { return ua.indexOf("firefox") !== -1; });
    }
})();
//# sourceMappingURL=modernizr-browser.js.map
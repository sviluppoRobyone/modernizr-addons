interface IModernizr{
    addTest(name:string,testFn:{():boolean}):void
}
declare var Modernizr:IModernizr;

(() => {
    if (!!window["Modernizr"]) {
        var ua = navigator.userAgent.toLowerCase();

        Modernizr.addTest("ie", () => ua.indexOf("msie") !== -1);

        [6, 7, 8, 9, 10, 11, 12].forEach(versionNumber => {
            Modernizr.addTest(`ie${versionNumber}`, () => navigator.userAgent.indexOf(`msie ${versionNumber}`) !== -1);
        });
        Modernizr.addTest("edge", () => ua.indexOf("edge") !== -1);
        Modernizr.addTest("chrome", () => ua.indexOf("chrome") !== -1);
        Modernizr.addTest("firefox", () => ua.indexOf("firefox") !== -1);

    }


})();


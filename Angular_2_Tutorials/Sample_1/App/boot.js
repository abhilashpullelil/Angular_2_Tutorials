
(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.myApp);
    });
})(window.app || (window.app = {}));
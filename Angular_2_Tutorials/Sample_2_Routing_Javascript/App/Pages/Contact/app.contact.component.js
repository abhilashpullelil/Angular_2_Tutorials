
(function (app) {

    app.contactComponent = ng.core.Component({
        selector: 'home',

        templateUrl: 'App/Pages/Contact/app.contact.view.html', // update the templateUrl to our new view

        directives: [ng.common.FORM_DIRECTIVES, ng.router.ROUTER_DIRECTIVES]
    })

    // This is the javascript body of our component
    // We can write all our javascript logic inside this
    .Class({
        // this function will be fired first when angularJS injected this component into view
        constructor: function () {

        }
    });

})(window.app || (window.app = {}));

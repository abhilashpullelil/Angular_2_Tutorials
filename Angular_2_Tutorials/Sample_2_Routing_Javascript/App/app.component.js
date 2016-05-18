
// Define your first component here
(function (app) {
    debugger;

    

    // create your component and assign it into a variable
    app.myApp = ng.core.Component({
        // selector specifyies that name of your html element,
        // where angular will compile and inject this component
        selector: 'my-app',

        // You can either use template or templateUrl
        // this is the html file, which is the body of this component
        templateUrl: 'App/app.view.html', // update the templateUrl to our new view

        // directives is accepting an array of directives which are used by this component
        // That is here, we inject the dependencies
        directives: [ng.common.FORM_DIRECTIVES, ng.router.ROUTER_DIRECTIVES]
    })

    // This is the javascript body of our component
    // We can write all our javascript logic inside this
    .Class({
        // this function will be fired first when angularJS injected this component into view
        constructor: function () {
            // you can initialize all your variable here
            // Don't forgot to specify the keyword "this" befor your variable name
            this.myName = "Abhilash P A";
        }
    });

    app.myApp = ng.router.RouteConfig([
        { path: '/', component: app.homeComponent, name: 'Home' },
        { path: '/about', component: app.aboutComponent, name: 'About' },
        { path: '/portfolio', component: app.portfolioComponent, name: 'Portfolio' },
        { path: '/contact', component: app.contactComponent, name: 'Contact' },
    ])(app.myApp);
    

})(window.app || (window.app = {}));

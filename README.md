# Angular_2_Tutorials
Tutorials for the angularJS version 2 using javascript.

Note : You can find the full tutorial here, https://angular2tutorialsjavascript.wordpress.com/

Hello every one. AngularJS team released AngularJS version 2 (beta). As you can see that it is still in Beta version not released the stable version. It is still in development phase. So be care full when learning AngularJS v2 from this blog as it may be out dated. I will try to update this blog and all the tutorials when they have made changes. If you encounter any issue in the code please inform me.

To learn any technology (or any thing) we have to find answers of three questions. They are,

What?
Why?
How?
So, we can start with "What?".

# What is AngularJS v2?

AngularJS is an open source web application framework mainly maintained by Google. It was first released on 2009. It is written purely in Javascript.

AngularJS is used to manipulate html page in client side using MVC(Model-ViewController) or MVVM(Model-View-ViewModel) architecture.

Main features of AngularJS is two way data binding. So, AngularJS is very suitable for creating single page applications.

Now in 2016, angular team releases beta version of AngularJS v.2. From my point of view Angular v.2 is extremely different from Angular v.1.x. So if you are new to AngularJS you can start learning from AngularJS v.2 no need to learn any previous version of AngularJS. So it is happy for all developers who are new to AngularJS but not very happy to those who already working on AngularJS. :( . I am one in those who already working on AngularJS v.1.x.

# Why AngularJS v.2?

It is very much easier to manipulate the html content (our view) and also we can do complex logic on client side using AngularJS. This lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.

Compared to AngularJS 1.x, version 2 is very fast and responsive.

AngularJS lets you give a power-full mechanism to make your client side very much dynamic.

So, are you ready for creating your first AngularJS v.2 application?

# How AngularJS?

It is very simple to learn AngularJS v.2. There is no need to have an experience in AngularJS 1.x. Anyway if you are familiar with AngularJS. 1.x you can easily understand some keywords like ng-model, ng-if etc.

# Get started with AngularJS v.2

We can learn AngularJS by creating a simple AngularJS v.2 application. Lets create a "Hello Abhilash" application. (yes, of course you can rename your application to your name :) ).

After creating this application you will be able to do,

data binding
event binding
create an advanced AngularJS v.2 application
We are using Javascript for creating our AngularJS v.2 application. We can use TypeScript or Dart for building AngularJS application. I am very much interested in Javascript, so I am using Javascript for developing AngularJS application.

As you know we can build any client side applications using just a text editor. So, you can use any editor to create this example. I am using Visual Studio 2013 as I am well versed in Visual Studio and it is handy to me.

Follow the below steps with me to create our first AngularJS v.2 application.

Note: all the explanations for the codes are listed at the very bottom of this post.
Create a new project (Empty web project)
Add a html file to your solution (or root folder). Name it Index.html (It is not necessary to name it "Index.html", you can name it is whatever you want. If you name it as Index.html then IIS will find this file by default, that's all !!!)
Create a folder in our solution and name it as "App". We can wrap all of our custom codes to this folder.
Create a Javascript file under the folder "App" (App/app.component.js) and name it as "app.component". We are going to write our logic inside this file.
Write the below codes to your javascript file, "app.component".
Code 1 (this code is explained at the bottom of this post)

// Define your first component here
(function (app) {

    // create your component and assign it into a variable
    app.myApp = ng.core.Component({
        // selector specifyies that name of your html element,
        // where angular will compile and inject this component
        selector: 'my-app',

        // You can either use template or templateUrl
        // this is the html file, which is the body of this component
        templateUrl: '', // leave this now

        // directives is accepting an array of directives which are used by this component
        // That is here, we inject the dependencies
        directives: [ng.common.FORM_DIRECTIVES]
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
  })(window.app || (window.app = {}));
   
Create html for your component. (App/app.view.html). This will be the html body of your component myApp
Write the below html codes to your file app.view.html
Code 2 (this code is explained at the bottom of this post)
 <h1>Hello {{myName}}</h1> This is my first AngularJS v.2 application 
Now add the template url of your component MyApp to this html page.
Code 3 (this code is explained at the bottom of this post)
 app.myApp = ng.core.Component({ selector: 'my-app', templateUrl: 'App/app.view.html', // update the templateUrl to our new view directives: [ng.common.FORM_DIRECTIVES] }) 
Now we are created our component, myApp
It's time to insert code into our Index.html file. Insert the below code to your Index.html file
Code 4 (this code is explained at the bottom of this post)
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Angular 2 Beta - Hello Abhilash</title>
 
    <!-- 1. Load libraries TO Do: Correct the spelling of all script below-->
     <scrip src="https://code.angularjs.org/2.0.0-beta.0/angular2-polyfills.js"></script>
    <scrip src="https://code.angularjs.org/2.0.0-beta.0/Rx.umd.js"></script>
    <scrip src="https://code.angularjs.org/2.0.0-beta.0/angular2-all.umd.dev.js"></script>
 
    <scrip src="App/app.component.js"></script>
    
</head>
<body>
    <!-- The below code specify that load angular component with selector 'my-app' loads here-->
    <my-app>Loading your component...</my-app>
</body>
</html>
Yes, we all done !!! Run your application to see what it render.
It will not render any of your angular code. :D
We have to explicitly bootstrap our angular component. To do so, just insert the below code to your Index.html's header part
Code 5 (this code is explained at the bottom of this post)


     (function (app) {
         document.addEventListener('DOMContentLoaded', function () {
             ng.platform.browser.bootstrap(app.myApp);
         });
     })(window.app || (window.app = {}));
 
Remember this code should be inside a script tag.
Now run your application once more. Is this render your name?

That's all.... You have created your first application on AngularJS v.2 !!!

Extra Note : It is not the best approach to write the code in html header. Create a separate file (javascript file) for the code in step 18 and name it boot.js as it is responsible for bootstrap our angular application. Don't forgot to add link of this file to your Index.html and it should be after linking your app.component.js file as your boot.js file is using app.myApp and it is initialized in app.component.js



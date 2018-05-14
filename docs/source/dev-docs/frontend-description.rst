#####################
Front End Description
#####################

| *Written by Richard Farman*
| *Edited and converted to reStructured Text by Jeremy Davis*

*Updated 2018-05-13*

********
Overview
********

The front end of the app is built with a modern web development stack. We use the *Model/View/Controller* paradigm to separate responsibilities and allow our app to have a dynamic and interchangeable structure.

Our components are essentially JavaScript classes that render and return HTML/CSS. We connect these classes to various JavasScript functions that use Redux to dispatch actions, like getting a list of books from the database. These dispatched actions then modify our data model, which is then displayed to the user by React.

The front end allows us to make requests and display responses from a database. So using our web client, any Whitman College student can login to the app, submit a book with a listing attached to the server, and see that listing propagated to *all other clients* using the app. An exchange shows all the listings that have been added by other users and allows you to contact sellers with an offer for their book. Your profile shows all of your personal listings for easy management.

Our front end is designed with a simple, cohesive, and modern experience in mind for both clients and developers alike. With these technologies, we are best prepared to take on the challenges of project scope and scale as we continue building our project.

*****************
Technologies Used
*****************

**HTML** (HyperText Markup Language) is the standard markup language used to create websites. HTML is rendered into *Document Object Model* (DOM), which is read by the browser to construct a web page. CSS describes the presentation of HTML content. Putting these two together, we can start building for the web.

**Javascript** is a programming language that can add interaction and extend the functionality of websites. JavaScript runs on the client side of the web, which can be used to control how the web page reacts on the occurrence of an event. JavaScript is an easy to learn and powerful scripting language that is widely used for controlling web page behaviour.

We use the **React.js** library to create declarative and composable user interfaces that form the view for our clients. Using Redux.js on top of React allows us to add interactive actions to our app, serving to form the model and controller.

**Redux** is a *predictable state container* for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

The whole state of your app is stored in an object tree inside a single store. The only way to change the state tree is to emit an action, an object describing what happened. To specify how the actions transform the state tree, you write pure reducers.

**Redux Thunk** middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods *dispatch* and *getState* as parameters.

**Reselect** is a simple library for creating memorized, composable selector functions. *Selectors* can compute derived data, allowing Redux to store the minimal possible state. Selectors are efficient. A selector is not recomputed unless one of its arguments change. Selectors are composable. They can be used as input to other selectors.


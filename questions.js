// The core features of Node.js and Express and why they are useful.
    //Node.js - runtime environment (program that runs other programs)
        //allows developers to use Javascript to write software. (can use JS outside of the browser)
        //single-threaded
        //Asynchronous: allows other processes to continue before the transmission has finished. - takes full advantage of processor
        //NPM repos
    //Express - web app framework(like React for backend, adds extra functionality like routing and middleware)
        //build web apps
        //serve single page apps
        //build RESTful web services that work with JSON
        //serve static content, like HTML files, imgs, audio files, PDFs, and more
        //power real-time apps using Web Socket or WebRTC

// Understand and explain the use of Middleware?
    //ex. route handlers, express.json() - parsing JSON content out of the req.body, require()
    //Middleware is an array of functions that get executed in the order they are introduced in the code.  
    //It has access to the req obj, the res obj, and the next function (executes the middlware succeeding the current middleware).
    //Makes changes to the req obj and res obj.

// The basic principles of the REST architectural style.
    //everything is a resource.
    //each resource is accessible via a unique URI.
    //resources can have multiple representations.
    //communication happens over a stateless protocol (HTTP).
    //resource management happens via HTTP methods.

// Understand and explain the use of Express Routers.
    //split our apps to sub apps to make to easier to maintain
    //map incoming req to the appropriate req handler(CRUD) based on the URL and HTTP Method used.

// Describe tooling used to manually test the correctness of an API.
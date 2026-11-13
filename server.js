// SERVER & ROUTING PRACTICE

const http = require("http");

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    res.setHeader("Content-Type", "text/plain");


    // HOME 


    if (url === "/" && method === "GET") {
        res.statusCode = 200;
        res.end("Welcome to Basil's Server");
    }


    // ABOUT 

    else if (url === "/about" && method === "GET") {
        res.statusCode = 200;
        res.end("About Page");
    }


    // CONTACT 

    else if (url === "/contact" && method === "GET") {
        res.statusCode = 200;
        res.end("Contact Page");
    }


    // SERVICES 

    else if (url === "/services" && method === "GET") {
        res.statusCode = 200;
        res.end("Our Services");
    }


    // USERS 

    else if (url === "/users" && method === "GET") {
        res.statusCode = 200;
        res.end("All Users");
    }

    else if (url === "/users" && method === "POST") {
        res.statusCode = 201;
        res.end("New User Created");
    }

    else if (url === "/users" && method === "PUT") {
        res.statusCode = 200;
        res.end("User Updated");
    }

    else if (url === "/users" && method === "DELETE") {
        res.statusCode = 200;
        res.end("User Deleted");
    }


    // PRODUCT 

    else if (url === "/products" && method === "GET") {
        res.statusCode = 200;
        res.end("All Products");
    }


    // JSON API 

    else if (url === "/api/user" && method === "GET") {
        res.setHeader("Content-Type", "application/json");

        res.statusCode = 200;

        res.end(JSON.stringify({
            name: "Basil",
            role: "Developer",
            city: "Karachi"
        }));
    }


    // METHOD NOT ALLOWED


    else if (
        ["/", "/about", "/contact", "/services", "/users", "/products", "/api/user"].includes(url)
    ) {
        res.statusCode = 405;
        res.end("Method Not Allowed");
    }


    // PAGE NOT FOUND


    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }

});

// ==========================================
// START SERVER
// ==========================================

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

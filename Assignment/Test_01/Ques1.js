import http from "http";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    
    if (req.url === "/") {
        res.writeHead(200);
        res.end("<h1>Welcome to My College</h1>");
    } 
    else if (req.url === "/home") {
        res.writeHead(200);
        res.end("<h1>Home page</h1>");
    } 
    else if (req.url === "/about") {
        res.writeHead(200);
        res.end("<h1>About Computer Science Department</h1>");
    } 
    else {
        res.writeHead(404);
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
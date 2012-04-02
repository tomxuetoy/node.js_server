var sys = require("util"),
    http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World!");
    response.close();
}).listen(8080);

sys.puts("Server running at http://localhost:8080/");

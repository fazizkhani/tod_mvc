var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (req, res) {
    

    if(req.url === "/"){
        fs.readFile("ToDoList.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.js")){
        var jsfilepath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(jsfilepath);
        res.writeHead(200, {"Content-Type": "text/javascript"});
        fileStream.pipe(res);
    }
	else if (req.method === "GET" && req.url === "/") {
		
			fs.readFile("ToDoList.html", function (error, content) {
				if (error) {
					res.writeHead(404, {
						"Content-Type": "text/html"
					});
					res.end("404 Not Found");
				}
				res.writeHead(200, {
					"Content-Type": contentType
				});
				res.end(content, "utf8");
			});
		
    } 
    else if (req.method === "GET" && req.url === "/read") {
       
			fs.readFile("ToDoList.html", function (err, data) {
				if (err) throw err;
				res.writeHead(200, {
					"Content-Type": "text/html"
				});
				res.write(data);
				res.end();
			});
		
	} else if (req.method === "POST" && req.url === "/write") {
	
			req.on("data", function (data) {
				fs.writeFile("ToDoList.html", data, function (err) {
					if (err) throw err;
				});
			});
			req.on("end", function () {
				console.log("Saved successfully!");
			});
			res.writeHead(200, {
				"Content-Type": "text/html"
			});
			res.end();
		
	} else {
		
			fs.readFile( req.url, function (err, content) {
				if (err) {
					res.writeHead(404, {
						"Content-Type": "text/html"
					});
					res.end("404 Not Found");
				}
				res.writeHead(200);
				res.end(content, "utf8");
			});
		
	}

    
}).listen(8081);


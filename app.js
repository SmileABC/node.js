var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        fs.readFile(__dirname+"/favicon.ico",function(err,data){
            res.end(data)
        })
    }
    if(req.url == "/"){
        fs.readFile(__dirname+"/views/index.html",function(err,data){
            res.end(data)
        })
    }
})
var io = require("socket.io")(server);
io.on("connection",function(socket){
    socket.on("neirong",function(mes){
        io.emit("fanhui",mes)
    })
})

server.listen(3000,"127.0.0.1");





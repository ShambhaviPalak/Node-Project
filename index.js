//PORT
//Entry point for our server
//Gateway through which external services can enter you server
//Database connection
//Authentication
//Security services


//HEADERS
//A-------->B


//HTTPS status code
//Success - 200
//Failure - 404 - not available
//401 - not authorized
//403 - authorized but forbidden to access
// Server error - 500


//JSON - it's a shortened format to exchange information between 2 servers

//fileSystem
//creat a file
/*const fileSystem = require("fs");
fileSystem.writeFile("noddy.txt","Hello Noddy!",function(err,result) {
  if(err) {
    console.log(err);
  }
});*/

//delete a file
/*const fileSystem = require("fs");
fileSystem.unlink("noddy.txt",function(err,result) {
  if(err) {
    console.log(err);
  }
});*/

//create directory
/*const fileSystem = require("fs");
fileSystem.mkdir("noddy" ,function(err,result) {
  if(err) {
    console.log(err);
  }
});*/

//delete a directory
/*const fileSystem = require("fs");
fileSystem.rmdir("noddy" ,function(err,result) {
  if(err) {
    console.log(err);
  }
});*/

//checks os
/*const operatingSystem = require("os");
console.log(operatingSystem.platform());*/

//tells architecture
/*const operatingSystem = require("os");
console.log(operatingSystem.arch());*/


//http
//creat our own PORT

/*const http = require("http");//search localhost:3000
http.createServer((request,response) => {
  console.log(request.headers);
  response.end("Hello Noddy!!!")
}).listen(3000);*/


/*const http = require("http");//search localhost:3000/about
http.createServer((request,response) => {
  if (request.url === "/") {
    response.end("Hello Noddy!!!")
  }
  else {
  response.end("Hello all!!! This is not the root route !");
  }
}).listen(3000);*/

//REST API

//RE -> REpresentational
//S -> State
//T -> Transfer

//Representing data by sharing after processing

const express = require("express");

//INITIALIZE
const noddy = express();
noddy.use(express.json());

//https methods -> GET POST PUT DELETE
//Get -> to retrive any Database
//Post -> to send a data to a srver
//Put -> to update an existing Data
//Delete -> to delete an existing Data


noddy.get("/",(request,response) => {
  return response.json({data: "Hello Guys"});//search localhost:3000 and /about
});

/*noddy.get("/b",(request,response)=>{
  return response.json({data: "Hello route b people!!"});
});*/

noddy.get("/b/:id",(req,res) => {
  const students = [
  {
    id: 1,
    name:"Student1"
  },

  {
    id: 2,
    name:"Student2"
  },

  {
    id: 3,
    name:"Student3"
  },

  {
    id: 4,
    name:"Student4"
  },

  {
    id: 5,
    name:"Student5"
  }
]
const studentID = req.params.id;
const getStudent = students.filter((student) => student.id === parseInt(studentID));
return res.json ({data: getStudent});
});

noddy.listen(3000, () => {
console.log("Server on port 3000 is up and running");
});

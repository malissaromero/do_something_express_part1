var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3500, function(){
  console.log("app listening at http://localhost:3500/");
});

//put 5 objects in tasks
//each object should contain 3 properties
var tasks = [
  {id: 1, body: "firsttodo", completed: false},
  {id: 2, body: "secondtodo", completed: false},
  {id: 3, body: "thirdtodo", completed: false},
  {id: 4, body: "fourthtodo", completed: false},
  {id: 5, body: "fifthtodo", completed: false},
]

app.get("/tasks", function (req, res){
  res.json(tasks);
});

app.post("/tasks/new", function (req, res){
  // req.params is more info about where the plane is going, and comes from the url; when you post a form, it's part of WHERE it gets posted
  // req.body is what the plane is carrying; when you post a form, it's what gets posted
  var newTask = {id: req.body.id, body: req.body.body, completed: req.body.completed}
  tasks.push(newTask)
  res.send(newTask);
  res.json(newTask);
});

app.get("/tasks/:id", function (req, res){
  for(var a = 0; a < tasks.length; a++){
    if (tasks[a].id == req.params.id){
      res.json(tasks[a])
    }
  }
});

//importing required library objects
import express from "express";
import todoRouter from "./router/todo.js";
import bodyParser from "body-parser";
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(todoRouter);


app.listen(3301, () => {
    console.log("listening on 3301");
  });

//Declaring an empty array 
const todoList = []; 


//Displying all list
app.get("/DisplayList", (req, res) => {
  res.json(todoList);
});


//Creating new Task
app.post("/CreateTask", (req, res) => {
  const todoitem = {
    id: todoList.length + 1,
    title: req.body.title,
    description: req.body.description,
    status: req.body.completed || false,
  };
  todoList.push(todoitem);
  res.status(201).json(todoitem);
});


//Deleting a task
app.post("/deleteTask", (req, res) => {
  var todoId = req.body.id;
  var j = 0;
  todoList.forEach((todo) => {
      j = j + 1;
      if (todo.id === todoId) {
          todoList.splice(j - 1, 1);
      }
  });
  res.redirect("/DisplayList");
})


//Updating a specific task
app.post("/updateTask", (req, res) => {
  var todoId = req.body.id;
  var j = 0;
  todoList.forEach((todo) => {
      j = j + 1;
      if (todo.id === todoId) {
          todoList={
            status: req.body.status
          };
      }
  });
  res.redirect("/DisplayList");
})


//Displaying a specific Task
app.post("/displayTask", (req, res) => {
  var itemId = req.body.id;
  var x = 0;
  todoList.forEach((todo) => {
      x = x + 1;
      if (todo.id === itemId) {
        const  requireTask={
            id: todo.id,
            title: todo.title,
            description: todo.description,
            status: todo.status
        };
      }
      res.json(requireTask);
  });
})


export default todoList;
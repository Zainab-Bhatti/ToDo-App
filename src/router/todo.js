import { Router } from "express";
import todoController from "../controller/todo.js";

const todoRouter = new Router();
todoRouter.get("/todoList", todoController.getAll);



export default todoRouter;

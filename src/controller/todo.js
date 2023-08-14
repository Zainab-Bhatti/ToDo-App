import todoModel from "../model/todo.js";

const todoController = {
  getAll: (req, res) => {
    const todoList = todoModel.getAll();
    return res.json(todoList);
  },

};

export default todoController;

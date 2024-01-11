const indexController = require("../controller/indexController");
const { jwtMiddleware } = require("../../jwtMiddleware");

exports.indexRouter = function (app) {
  //일정 CRUD API
  app.post("/todo", jwtMiddleware, indexController.createTodo);
  app.get("/todos", jwtMiddleware, indexController.readTodo);
  app.patch("/todo", jwtMiddleware, indexController.updateTodo);
  app.delete("/todo/:todoIdx", jwtMiddleware, indexController.deleteTodo);
};

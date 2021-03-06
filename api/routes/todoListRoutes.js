'use strict';
module.exports = function(app) {
	var todoList = require('../controllers/todoListController');

	// todoList Routes
	app.route('/tasks')
		.get(todoList.listAllTasks)
		.post(todoList.createATask);

	app.route('/tasks/:taskId')
		.get(todoList.readATask)
		.put(todoList.updateATask)
		.delete(todoList.deleteATask);
};
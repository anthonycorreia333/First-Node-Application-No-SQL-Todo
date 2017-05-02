'use strict';

var mongoose = require('mongoose'),
task = mongoose.model('Tasks');

exports.listAllTasks = function(req, res) {
	task.find({}, function(err, task) {
		if(err)
			res.send(err);
		res.json(task);
	});
};

exports.createATask = function(req, res) {
	var newTask = new task(req.body);
	newTask.save(function(err, task) {
		if(err)
			res.send(err);
		res.json(task);
	}); 
};

exports.readATask = function(req, res) {
	task.findById(req.params.taskId, function(err, task) {
		if(err) 
			res.send(err);
		res.json(task)
	});
};

exports.updateATask = function(req, res) {
	task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
		if(err)
			res.send(err);
		res.json(task);
	});
};

exports.deleteATask = function(req, res) {
	task.remove({
		_id: req.params.taskId
	}, function(err, task) {
		if(err)
			res.send(err);
		res.json({ message: 'Task succesfully deleted' });
	});
};


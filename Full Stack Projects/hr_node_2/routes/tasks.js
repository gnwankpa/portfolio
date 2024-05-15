var express = require('express');
var router = express.Router();
var tasksController = require('../controllers/tasks.controller');
const traceMiddleware = require('../middleware')

router
    .post('/', traceMiddleware, tasksController.create)
    .get('/:id',traceMiddleware, tasksController.getById)
    .get('/', traceMiddleware, tasksController.getAll);

module.exports = router;

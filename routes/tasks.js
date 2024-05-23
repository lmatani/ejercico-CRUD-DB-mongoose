// Aquí estarán todas las rutas
const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js"); 


router.post("/create", async(req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).send(task);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a new task" });
    }
});

router.get("/", async(req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to select tasks" });
    }
});

router.get("/id/:id", async(req, res) => {
    try {  
        const {id}= req.params;
        const tasks = await Task.find({ id: `${id}`}).exec();
        res.status(200).send(tasks);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to select task by ID" });
    }
});

router.put("/id/:id", async(req, res) => {
    try {  
        const {id}= req.params;
        const {title, completed} = req.body;
         const result = await Task.updateOne({ id: `${id}`},{$set: { title: `${title}`}}).exec();
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to update name of task by ID" });
    }
});

router.put("/markAsCompleted/:id", async(req, res) => {
    try {  
        const {id}= req.params;
        const {title, completed} = req.body;
         const result = await Task.updateOne({ id: `${id}`},{$set: { completed: `${completed}`}}).exec();
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to update completed task by ID" });
    }
});


router.delete("/id/:id", async(req, res) => {
    try {  
        const {id}= req.params;
        const tasks = await Task.deleteOne({ id: `${id}`}).exec();
        res.status(200).send(tasks);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to delete task by ID" });
    }
});

/* to do incluir validaciones de datos de entrada */

module.exports = router;
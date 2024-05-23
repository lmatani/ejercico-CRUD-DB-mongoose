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


router.delete("/id/:id", async(req, res) => {
    try {  
        const {id}= req.params;
        const tasks = await Task.deleteOne({ id: `${id}`}).exec();
        res.status(200).send(tasks);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to select task by ID" });
    }
});

module.exports = router;
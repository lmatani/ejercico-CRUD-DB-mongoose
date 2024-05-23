// Aqui ira el modelo de la tarea con los campos title
// completed y los timestamps.
const { Int32 } = require('bson');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    id: Number,
    title: String,
    completed: Boolean,
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
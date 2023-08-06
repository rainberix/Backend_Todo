const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String },
    state: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
}, {
    timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
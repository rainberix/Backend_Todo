const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');

// GET all TODO items
router.get('/getTodo', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// POST a new TODO item
router.post('/addTodo', async (req, res) => {
    try {
        const { name, content, state, priority } = req.body;
        const newTodo = new Todo({ name, content, state, priority });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
});
module.exports = router;
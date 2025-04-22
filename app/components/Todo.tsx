'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: input.trim(),
          completed: false,
        },
      ]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <motion.h1 
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Todo List
      </motion.h1>
      <motion.form 
        onSubmit={addTodo} 
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <motion.button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add
          </motion.button>
        </div>
      </motion.form>
      <motion.ul className="space-y-3">
        <AnimatePresence mode="popLayout">
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="h-5 w-5 rounded border-gray-300 focus:ring-blue-500"
                />
                <motion.span
                  className={`${todo.completed ? 'line-through text-gray-500' : ''}`}
                  animate={{
                    scale: todo.completed ? 0.95 : 1,
                    opacity: todo.completed ? 0.5 : 1
                  }}
                >
                  {todo.text}
                </motion.span>
              </div>
              <motion.button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Delete
              </motion.button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
} 
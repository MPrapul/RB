'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  isEditing?: boolean;
}

type FilterStatus = 'all' | 'active' | 'completed';

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState('');
  const [editInput, setEditInput] = useState('');
  const [filter, setFilter] = useState<FilterStatus>('all');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    const newTodo: TodoItem = {
      id: Date.now(),
      text: input,
      completed: false
    };
    
    setTodos([newTodo, ...todos]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id: number, text: string) => {
    setEditInput(text);
    setTodos(
      todos.map(todo => 
        todo.id === id 
          ? { ...todo, isEditing: true } 
          : { ...todo, isEditing: false }
      )
    );
  };

  const cancelEditing = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id 
          ? { ...todo, isEditing: false } 
          : todo
      )
    );
  };

  const saveEdit = (id: number) => {
    if (editInput.trim() === '') return;
    
    setTodos(
      todos.map(todo => 
        todo.id === id 
          ? { ...todo, text: editInput, isEditing: false } 
          : todo
      )
    );
    setEditInput('');
  };

  const filteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <motion.h1 
        className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
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
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg transition"
          >
            Add
          </button>
        </div>
      </motion.form>
      
      <div className="flex justify-center mb-4 space-x-4">
        <motion.button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-lg ${
            filter === 'all' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All ({todos.length})
        </motion.button>
        <motion.button
          onClick={() => setFilter('active')}
          className={`px-3 py-1 rounded-lg ${
            filter === 'active' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Active ({activeTodosCount})
        </motion.button>
        <motion.button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 rounded-lg ${
            filter === 'completed' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Completed ({completedTodosCount})
        </motion.button>
      </div>
      
      <motion.ul className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredTodos().map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30, opacity: { duration: 0.2 } }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow p-4"
            >
              {todo.isEditing ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    className="flex-grow mr-2 py-1 px-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="bg-green-500 hover:bg-green-600 text-white p-1 rounded mr-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    onClick={() => cancelEditing(todo.id)}
                    className="bg-red-500 hover:bg-red-600 text-white p-1 rounded"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3"
                    />
                    <span 
                      className={`${
                        todo.completed 
                          ? 'line-through text-gray-400 dark:text-gray-500' 
                          : 'text-gray-800 dark:text-white'
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => startEditing(todo.id, todo.text)}
                      className="text-gray-400 hover:text-blue-500 p-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-gray-400 hover:text-red-500 p-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      
      {todos.length > 0 && (
        <motion.div 
          className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-600 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-4">
            <span>{activeTodosCount} item{activeTodosCount !== 1 ? 's' : ''} left</span>
            <span>•</span>
            <span>{completedTodosCount} completed</span>
          </div>
          {completedTodosCount > 0 && (
            <motion.button
              onClick={clearCompleted}
              className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear completed
            </motion.button>
          )}
        </motion.div>
      )}
      
      {todos.length === 0 && (
        <motion.div 
          className="text-center py-8 text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>Your todo list is empty.</p>
          <p className="mt-2">Add a new task to get started!</p>
        </motion.div>
      )}
    </div>
  );
} 
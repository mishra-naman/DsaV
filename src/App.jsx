import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import NavBar from "./components/NavBar";
import StackComponent from "./components/stack/StackComponent";
import ArrayComponent from "./components/arrays/ArrayComponent";
import ObjectComponent from './components/objects/ObjectComponent';
import ListComponent from './components/linked-list/ListComponent';
import BinaryTreeComponent from './components/binaryTree/BinaryTreeComponent';
import DoublyListComponent from './components/doubly-LinkedList/DoublyListCompontnts';
import CircularListComponent from './components/circularLinkedList/CircularListComponent';
import HashComponent from './components/hashing/HashComponent';
import CacheComponent from './components/caching/CacheComponent';
import QueueComponent from './components/queues/QueueComponent';
import CircularQueueComponent from './components/circilarQueue/CircularQueueComponent';
import PriorityQueueComponents from './components/priorityQueue/PriorityQueueComponents';
import BSTComponent from './components/binarySearchTree/BSTComponent';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <NavBar />
      <div className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
      <Routes>
        <Route path="/stack" element={<StackComponent />} />
        <Route path="/queue" element={<QueueComponent />} />
        <Route path="/circularQueue" element={<CircularQueueComponent />} />
        <Route path="/priorityQueue" element={<PriorityQueueComponents />} />
        <Route path="/array" element={<ArrayComponent />} />
        <Route path="/object" element={<ObjectComponent />} />
        <Route path="/list" element={<ListComponent />} />
        <Route path="/doublyList" element={<DoublyListComponent />} />
        <Route path="/circularList" element={<CircularListComponent />} />
        <Route path="/binaryTree" element={<BinaryTreeComponent />} />
        <Route path="/binarySearchTree" element={<BSTComponent />} />
        <Route path="/hashing" element={<HashComponent />} />
        <Route path="/caching" element={<CacheComponent />} />
      </Routes>
    </Router>
  );
};

export default App;

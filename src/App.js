import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostForm from './PostForm';
import FindQuestion from './FindQuestion';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/questions">Find Questions</Link>
            </li>
            <li>
              <Link to="/new-post">New Post</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<FindQuestion />} />
          <Route path="/new-post" element={<PostForm />} />
        </Routes>
      </div>
    </Router>
  );
};

// Simple Home Page
const Home = () => {
  return (
    <div>
      <h2>Welcome to the Forum</h2>
      <p>Navigate to create new posts or find questions to answer.</p>
    </div>
  );
};

export default App;

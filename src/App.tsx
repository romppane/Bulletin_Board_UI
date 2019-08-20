import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/post/:id" component={PostPage} />
      </Router>
    </div>
  );
};

export default App;

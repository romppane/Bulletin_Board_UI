import React from 'react';
import './App.css';
import BulletinList from './components/BulletinList';
import CommentList from './components/CommentList';

const App: React.FC = () => {
  return (
    <div className="App">
      <BulletinList />
      <CommentList postId={4} />
    </div>
  );
};

export default App;

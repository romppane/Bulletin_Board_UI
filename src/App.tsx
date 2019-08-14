import React from 'react';
import './App.css';
import BulletinList from './components/BulletinList';
import CommentList from './components/CommentList';
import BulletinSubmit from './components/BulletinSubmit';

const App: React.FC = () => {
  return (
    <div className="App">
      <BulletinSubmit ownerId={1} />
      <BulletinList />
      <CommentList postId={1} />
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import Bulletin from './components/Bulletin';


const App: React.FC = () => {
  const posts = fetch('https://bulletin-board-onboarding-api.herokuapp.com/posts')
  return (
    <div className="App">
      <Bulletin header="HEADER" avatar="avatar" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </div>
  );
}

export default App;

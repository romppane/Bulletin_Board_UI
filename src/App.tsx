import React from 'react';
import './App.css';
import BulletinList from './components/BulletinList';
import CommentList from './components/CommentList';
import BulletinSubmit from './components/BulletinSubmit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <BulletinSubmit ownerId={1} />
            <BulletinList />
          </Route>
          <Route path="/comment/:id" component={CommentList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

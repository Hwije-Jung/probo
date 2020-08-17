import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import Compare from './Compare';
import Subscribe from './Subscribe';
import Login from './Login/Login_page';
import Mypage_page from './Mypage/Mypage_page';

function App() {
  return (
    
    <Router>
      <Route exact path="/" component={Main}/>
      <Route exact path="/compare" component={Compare}/>
      <Route exact path="/subscribe" component={Subscribe}/>
      <Route exact path="/login" component={Login}/>
    </Router>

  );
}

export default App;

//Packages
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CSS
import './App.css';

//Components
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';

//Context
import UserContext from './contexts/UserContext';
import AuctionsContext from './contexts/AuctionsContext';

function App() {
  const [user] = useState(null);

  return (
    <UserContext.Provider value={{user}}>
      <Router>
        <div>
          <Switch>
            <PrivateRoute exact path="/home" component={Home} />
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

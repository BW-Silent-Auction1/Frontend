//Packages
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CSS
import './App.css';

//Components
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import NavBar from './components/NavBar';

//Context
import UserContext from './contexts/UserContext';
import AuctionsContext from './contexts/AuctionsContext';

//Custom Hooks
import useAuctions from './hooks/useAuctions';

function App() {
  const [user] = useState(null);
  const [auctions, updateAuctions] = useAuctions([]);

  return (
    <UserContext.Provider value={{user}}>
      <AuctionsContext.Provider value={{auctions, updateAuctions}}>>
        <Router>
          <NavBar />
          <div className="App">
            <Switch>
              <PrivateRoute exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Registration} />
              {/* <Route exact path="/createauction" component={CreateAuction} /> */}
            </Switch>
          </div>         
        </Router>
      </AuctionsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

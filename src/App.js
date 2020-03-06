//Packages
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CSS
import './App.css';
import NewAuction from './NewAuction';

//Components
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import NavBar from './components/NavBar';
import AuctionCard from './components/AuctionCard';

//Context
import UserContext from './contexts/UserContext';
import AuctionsContext from './contexts/AuctionsContext';

//Custom Hooks
import useAuctions from './hooks/useAuctions';
import useUsers from './hooks/useUsers';
import useUser from './hooks/useUser';

function App() {
  const [user, updateUser] = useUser();
  const [users, updateUsers] = useUsers();
  const [auctions, updateAuctions] = useAuctions();

  return (
    <UserContext.Provider value={{user, updateUser}}>
      <AuctionsContext.Provider value={{auctions, updateAuctions}}>>
        <Router>
          <NavBar />
          <div className="App">
            <Switch>
              <PrivateRoute exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Registration} />
              <Route exact path="/auctions/:id" component={AuctionCard} />
              {/* <Route exact path="/createauction" component={CreateAuction} /> */}
            </Switch>
          </div>         
        </Router>
      </AuctionsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

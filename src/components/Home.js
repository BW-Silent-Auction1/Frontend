import React, {useState, useEffect, useContext} from 'react';
import AuctionList from './AuctionList';
import UserContext from '../contexts/UserContext';

const Home = props => {
    const {user, updateUser} = useContext(UserContext);

    useEffect(() => {
        if(!user)
            updateUser();
    }, [])


    if(!user)
        return <h4>Please wait</h4>
        
    return (
        <div className="home">
            <div className="home-nav">
                <h1>Welcome back {user.username}</h1>
            </div>
            <AuctionList />
        </div>
    )
}

export default Home;
import React, {useState, useEffect, useContext} from 'react';
import AuctionList from './AuctionList';
import MyAuctions from './MyAuctions';
import AuctionsContext from '../contexts/AuctionsContext';
import UserContext from '../contexts/UserContext';

const Home = props => {
    const {auctions, updateAuctions} = useContext(AuctionsContext);
    const {user, updateUser} = useContext(UserContext);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if(!auctions)
            updateAuctions();
        if(!user)
            updateUser();
    }, [])

    if(!auctions || !user)
        return <h4>Please wait</h4>
        
    return (
        <div className="home">
            <div className="home-nav">
                <h1>Welcome back {user.username}</h1>
                <button onClick={() => setPage(0)}>My Auctions</button>
                <button onClick={() => setPage(1)}>All Auctions</button>
            </div>

            {page === 0 ? <MyAuctions /> : <AuctionList/>}
        </div>
    )
}

export default Home;
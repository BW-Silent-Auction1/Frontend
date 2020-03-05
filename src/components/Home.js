import React, {useState} from 'react';
import AuctionList from './AuctionList';
import MyAuctions from './MyAuctions';

const Home = props => {
    const [page, setPage] = useState(0);

    return (
        <div className="home">
            <div className="home-nav">
                <button onClick={() => setPage(0)}>My Auctions</button>
                <button onClick={() => setPage(1)}>All Auctions</button>
            </div>

            {page === 0 ? <MyAuctions /> : <AuctionList/>}
        </div>
    )
}

export default Home;
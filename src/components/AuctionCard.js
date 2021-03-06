import React, {useState, useContext, useEffect} from 'react';
import Timer from './Timer';
import { useParams } from 'react-router-dom';
import AuctionsContext from '../contexts/AuctionsContext';
import UserContext from '../contexts/UserContext';
import BidForm from './BidForm';


const AuctionCard = props => {
    const {auctions, updateAuctions} = useContext(AuctionsContext);
    const {user, updateUser} = useContext(UserContext);
    const {id} = useParams();
    const [auction, setAuction] = useState();

    useEffect(() => {
        if(!auctions)
            updateAuctions();
        
        if(!user)
            updateUser();
    }, []);

    useEffect(() => {
        console.log(id);
        if(auctions)
            setAuction(auctions.find((a) => {
                console.log(a.id);
                return a.id == id;
            }));
    }, [id, auctions]);

    if(!auction || !auctions) {
        console.log(auction, auctions);
        return <h1>Loading...</h1>
    }

    return (
        <div className="large-card">
            <h1>{auction.auction_title}</h1>
            <h2>Created by {auction.user_id}</h2>
            <h2>Starting Price</h2>
            <p>{auction.current_price}</p>
            <h2>Start Time:</h2>
            <p>{auction.starttime}</p>
            <h2>End Time:</h2>
            <p>{auction.endtime}</p>
            <h2>Item Description</h2>
            <p>{auction.auction_description}</p>
            <Timer endtime={auction.endtime}/>
            <BidForm auction={auction} user_id={user.id} />      
        </div>
    )
}

export default AuctionCard;
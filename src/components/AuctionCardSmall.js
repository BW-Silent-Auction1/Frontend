import React from 'react';
import Timer from './Timer';
import { Link } from "react-router-dom";

const AuctionCardSmall = ({auction}) => {
    return (
        <Link to={`/auctions/${auction.id}`}>
            <div className="small-card">
                <h1>{auction.auction_title}</h1>
                <Timer endtime={auction.endtime}/>      
            </div>
        </Link>
    )
}

export default AuctionCardSmall;
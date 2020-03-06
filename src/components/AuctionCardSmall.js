import React from 'react';
import Timer from './Timer';

const AuctionCardSmall = ({auction}) => {
    return (
        <div className="small-card">
            <h1>{auction.auction_title}</h1>
            <Timer endtime={auction.endtime}/>      
        </div>
    )
}

export default AuctionCardSmall;
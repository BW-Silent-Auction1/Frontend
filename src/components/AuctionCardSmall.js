import React from 'react';

const AuctionCardSmall = ({auction}) => {
    return (
        <div className="small-card">
            <h1>{auction.auction_title}</h1>       
        </div>
    )
}

export default AuctionCardSmall;
import React, {useContext} from 'react';
import AuctionCardSmall from './AuctionCardSmall';
import AuctionsContext from '../contexts/AuctionsContext';

const MyAuctions = props => {
    const {auctions} = useContext(AuctionsContext);

    return (
        <div className="auction-list">
            {auctions.map(auction => <AuctionCardSmall auction={auction}/>)}       
        </div>
    )
}

export default MyAuctions;
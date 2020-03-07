import React, {useContext} from 'react';
import AuctionCardSmall from './AuctionCardSmall';
import AuctionsContext from '../contexts/AuctionsContext';

const AuctionList = props => {
    const {auctions} = useContext(AuctionsContext);

    return (
        <div className="auction-list">
            {auctions.map(auction => <AuctionCardSmall key={auction.id} auction={auction}/>)}       
        </div>
    )
}

export default AuctionList;
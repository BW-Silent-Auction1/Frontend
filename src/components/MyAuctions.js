import React, {useContext} from 'react';
import AuctionCardSmall from './AuctionCardSmall';
import AuctionsContext from '../contexts/AuctionsContext';

const MyAuctions = props => {
    const {auctions, updateAuctions} = useContext(AuctionsContext);

    if(!auctions)
        return <div>Loading...</div>;

    return (
        <div className="auction-list">
            {auctions.map(auction => <AuctionCardSmall auction={auction}/>)}       
        </div>
    )
}

export default MyAuctions;
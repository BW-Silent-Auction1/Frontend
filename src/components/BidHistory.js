import React, { useContext, useEffect, useState } from 'react';
import BidsContext from '../contexts/BidsContext';

const BidHistory = ({auction}) => {
    const {bids, updateBids} = useContext(BidsContext);
    const [mybids, setMyBids] = useState([]);

    useEffect(() => {
        if(!bids)
            updateBids();
        else
            setMyBids(bids.filter(bid => auction.id === bid.auctions_id));
    }, [bids]);

    return (
        <table className="history-table">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {mybids.map(bid => {
                    return (
                        <tr>
                            <td>{bid.user_id}</td>
                            <td>{bid.amount}</td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td>Starting Bid</td>
                    <td>{auction.current_price}</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default BidHistory;
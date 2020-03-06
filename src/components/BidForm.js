import React, {useState} from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import AuctionsContext from '../contexts/AuctionsContext';

const BidForm = ({auction, user_id}) => {
    const [bid, setBid] = useState({
        "user_id" : user_id,
        "auctions_id" : auction.id,
        "amount" : auction.currentprice
    });

    const [success, setSuccess] = useState(false);

    const handleBid = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/bids", bid)
            .then( () => setSuccess(true))
            .catch(err => console.log(`Error in handleBid: ${err}`));
    };

    const handleChange = e => {
        if(e.target.value >= 0)
            setBid({...bid, "amount": e.target.value});
    };

    if(success)
        return <h2>Your bid as been submitted</h2>

    return (
        <div className="bid">
          <form onSubmit={handleBid}>
              <label>ENTER YOUR BID</label>
              <input
                type="text"
                name="thebid"
                value={bid.amount}
                onChange={handleChange}
              />
              <button>Submit Bid</button>
          </form>
        </div>
      );
};

export default BidForm;
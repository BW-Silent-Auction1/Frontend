import React, {useState} from '.react'

const BidForm = ({auction}) => {
    cosnt [bid, setBid] = useState(0);

    const handleBid = e => {

    };

    const handleChange = e => {
        if(e.target.value >= 0)
            setBid(e.target.value);
    };

    return (
        <div className="bid">
          <h1>Log in to your account</h1>
          <form onSubmit={handleBid}>
              <label>ENTER YOUR BID</label>
              <input
                type="text"
                name="thebid"
                value={credentials.bid}
                onChange={handleChange}
              />
              <button>Submit Bid</button>
          </form>
          <p>Don't have an account?</p>
          <Link to="/register">Create a new account</Link>
        </div>
      );
};

export default BidForm;
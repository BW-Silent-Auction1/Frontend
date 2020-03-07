import {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const useBids = initialState => {
    console.log("useBids")
    const [bids, setBids] = useState(initialState);

    const updateBids = () => {
        console.log("useBids updateBids")
        if(!localStorage.getItem("token"))
            return;

        axiosWithAuth()
            .get("/bids")
            .then(res => setBids(res.data, console.log(res.data)))
            .catch(err => {
                console.log(`Error in updateBids: ${err}`)
            });
    }

    return ([bids, updateBids]);
};

export default useBids;
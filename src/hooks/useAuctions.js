import {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const useUser = initialState => {
    console.log("useAuctions")
    const [auction, setAuctions] = useState(initialState);

    const updateAuctions = () => {
        console.log("useAuctions updateAuctions")
        if(!localStorage.getItem("token"))
            return;

        axiosWithAuth()
            .get("/auctions")
            .then(res => setAuctions(res.data))
            .catch(err => {
                console.log(`Error in updateAuctions: ${err}`)
            });
    }

    return ([auction, updateAuctions]);
};

export default useUser;
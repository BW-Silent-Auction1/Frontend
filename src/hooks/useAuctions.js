import {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const useUser = initialState => {
    console.log("useUser")
    const [auction, setAuctions] = useState(initialState);

    const updateAuctions = () => {
        console.log("useUser updateUser")
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
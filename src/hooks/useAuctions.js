import {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const useAuctions = initialState => {
    console.log("useAuctions")
    const [auctions, setAuctions] = useState(initialState);

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

    return ([auctions, updateAuctions]);
};

export default useAuctions;
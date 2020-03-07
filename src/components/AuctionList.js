import React, {useContext, useState, useEffect} from 'react';
import AuctionCardSmall from './AuctionCardSmall';
import UserContext from '../contexts/UserContext';
import AuctionsContext from '../contexts/AuctionsContext';

const AuctionList = props => {
    const [created, setCreated] = useState([]);
    const [completed, setCompleted] = useState([]); //Excludes created
    const [active, setActive] = useState([]); //Excludes created

    const {auctions, updateAuctions} = useContext(AuctionsContext);
    const {user, updateUser} = useContext(UserContext);
    //const {users, updateUsers} = useContext(UsersContext);

    useEffect(() => {
        if(!auctions)
            updateAuctions();
        if(!user)
            updateUser();
    }, [])

    useEffect(() => {
        if(!auctions || !user)
            return;

        setCreated(auctions.filter(a => a.user_id === user.id));
        setCompleted(auctions.filter(a => a.endtime < Date.now()));
        setActive(auctions.filter(a => (a.endtime >= Date.now()) && (a.user_id !== user.id)));
    }, [auctions, user]);

    if(!auctions || !user)
        return <h3>Loading...</h3>

    return (
        <div className="auction-list">
            <h3>Created Auctions</h3>
            {created.length > 0 ? created.map(auction => <AuctionCardSmall key={auction.id} auction={auction}/>) : <div>None</div>}
            <h3>Active Auctions</h3>
            {active.length > 0 ? active.map(auction => <AuctionCardSmall key={auction.id} auction={auction}/>) : <div>None</div>}
            <h3>Completed Auctions</h3>
            {completed.length > 0 ? completed.map(auction => <AuctionCardSmall key={auction.id} auction={auction}/>) : <div>None</div>}        
        </div>
    )
}

export default AuctionList;
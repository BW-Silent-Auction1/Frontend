import {useState, useEffect} from 'react';

const useUser = initialState => {
    console.log("useUser")
    const [user, setUser] = useState(initialState);

    const updateUser = () => {
        console.log("useUser updateUser")

        setUser(JSON.parse(localStorage.getItem("user")));

        console.log(user)
    }
    
    return ([user, updateUser]);
};

export default useUser;
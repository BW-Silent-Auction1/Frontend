import {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const useUsers = initialState => {
    console.log("useUsers")
    const [users, setUsers] = useState(initialState);

    const updateUsers = () => {
        console.log("useUsers updateUsers")
        if(!localStorage.getItem("token"))
            return;

        axiosWithAuth()
            .get("/auth/users")
            .then(res => {
                console.log(res.data)
                setUsers(res.data.user)
            })
            .catch(err => {
                console.log(`Error in updateUsers: ${err}`)
            });
    }

    return ([users, updateUsers]);
};

export default useUsers;
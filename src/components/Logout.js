import React, { useEffect } from 'react';

const Logout = props => {

        useEffect(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            setTimeout(() => {
                props.history.push("/login");;
            }, 1000);
        }, []);

        return (
            <h1>You are logged out</h1>
        )
}

export default Logout;
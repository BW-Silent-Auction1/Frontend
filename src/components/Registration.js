import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Registration = props => {
    const [credentials, setCredentials] = useState(
      {
        username: "Lambda School",
        password: "i<3Lambd4"
        
      }
    );
    const [checkPassword, setCheckPassword] = useState("");
  
    const handleChange = e => {
      setCredentials({
        credentials: {
          ...credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    const register = e => {
      e.preventDefault();
      axiosWithAuth()
        .post("/register", credentials)
        .then(res => {
          //localStorage.setItem("token", res.data.payload);
          props.history.push("/login");
        })
        .catch(err => {
          localStorage.removeItem("token");
          console.log("invalid login: ", err);
        });
    };
  
    return (
      <>
        <h1>Welcome to the SAVE THE WHALES Silent Auction!</h1>
        <p>Create a new account here</p>
        <form onSubmit={register}>
                <label>User Name</label>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <label>Confirm Password</label>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Create Account</button>
          </form>
      </>
    );
  };
  
  export default Registration;
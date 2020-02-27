import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
    const [credentials, setCredentials] = useState(
      {
        username: "Lambda School",
        password: "i<3Lambd4"
      }
    );
  
    const handleChange = e => {
      setCredentials({
        credentials: {
          ...credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    const login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post("/login", credentials)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/home");
        })
        .catch(err => {
          localStorage.removeItem("token");
          console.log("invalid login: ", err);
        });
    };
  
    return (
      <>
        <h1>Welcome to the SAVE THE WHALES Silent Auction!</h1>
        <p>Login here</p>
        <form onSubmit={login}>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
              <button>Log in</button>
          </form>
      </>
    );
  };
  
  export default Login;
  
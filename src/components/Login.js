import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import AuctionsContext from '../contexts/AuctionsContext';

const Login = props => {
    const {auctions, updateAuctions} = useContext(AuctionsContext);
    const [credentials, setCredentials] = useState(
      {
        username: "test20",
        password: "test20"
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
        .post("/auth/login", credentials)
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          updateAuctions();
          props.history.push("/home");
        })
        .catch(err => {
          localStorage.removeItem("token");
          console.log("invalid login: ", err);
        });
    };
  
    return (
      <div className="login">
        <h1>Log in to your account</h1>
        <form onSubmit={login}>
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
              <button>Log in</button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/register">Create a new account</Link>
      </div>
    );
  };
  
  export default Login;
  
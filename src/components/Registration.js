import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Registration = props => {
    const [credentials, setCredentials] = useState(
      {
        username: "",
        email: "",
        password: ""
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

    const resetPasswords = () => {
      setCredentials({
        ...credentials,
        password: ""
      });
      setCheckPassword("");
    }
  
    const comparePasswords = () => {
      if(checkPassword !== credentials.password)
      {
        console.log("Error: Passwords do not match");
        resetPasswords();
        return false;
      }

      return true;
    }

    const register = e => {
      e.preventDefault();

      if(!comparePasswords())
        return;

      axiosWithAuth()
        .post("/register", credentials)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/login");
        })
        .catch(err => {
          localStorage.removeItem("token");
          console.log("registration failed: ", err);
        });
    };
  
    return (
      <div className="login" classname="register">
        <h1>Create a new account</h1>
        <form onSubmit={register}>
                <label>User Name</label>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <label>E-mail</label>
                <input
                    type="text"
                    name="username"
                    value={credentials.email}
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
                    onChange={(event) => setCheckPassword(event.target.value)}
                />
                <button>Create Account</button>
          </form>
      </div>
    );
  };
  
  export default Registration;
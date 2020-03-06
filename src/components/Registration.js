import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const Registration = props => {
    const [credentials, setCredentials] = useState(
      {
        "username": "",
        "email": "",
        "password": ""
      }
    );

    const [checkPassword, setCheckPassword] = useState("");
  
    const handleChange = e => {
      console.log(handleChange, e.target.name, e.target.value, credentials);
      setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
      });
    };

    const handleChangePass = e => {
      console.log("handeChangePass");
      setCheckPassword(e.target.value);
    };

    const resetPasswords = () => {
      setCredentials({
        ...credentials,
        password: ""
      });
      setCheckPassword("");
    }
  
    const validatePassword = () => {
      if(checkPassword !== credentials.password)
      {
        console.log("Error: Passwords do not match", checkPassword, credentials.password);
        resetPasswords();
        return false;
      }

      if(credentials.password.length < 8)
      {
        console.log("Error: password is too short. Must be at least 8 characters", `Current length: ${credentials.password.length}`)
        return false;
      }

      return true;
    }

    const register = e => {
      e.preventDefault();

      if(!validatePassword())
        return;

      axiosWithAuth()
        .post("auth/register", credentials)
        .then(res => {
          props.history.push("/login");
        })
        .catch(err => {
          console.log(credentials)
          console.log("registration failed: ", err);
        });
    };
  
    return (
      <div className="login">
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
                    name="email"
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
                    name="checkpassword"
                    value={checkPassword}
                    onChange={handleChangePass}
                />
                <button>Create Account</button>
          </form>
      </div>
    );
  };
  
  export default Registration;
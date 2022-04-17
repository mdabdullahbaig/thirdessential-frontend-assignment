import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CssClass from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [httpErrorMessage, setHttpErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };

    let response;
    try {
      response = await axios.post(
        "http://localhost:3001/api/users/login",
        body
      );
    } catch (error) {
      console.log(error.response.data.message);
      setHttpErrorMessage(error.response.data.message);
    }

    if (response.data) {
      localStorage.setItem("token", response.data.token);
      navigate("/", { replace: true });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className={CssClass.loginDiv}>
      <form onSubmit={handleSubmit}>
        {httpErrorMessage !== "" ? <p>{httpErrorMessage}</p> : ""}

        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

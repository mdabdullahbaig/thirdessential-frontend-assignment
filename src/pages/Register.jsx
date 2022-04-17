import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CssClass from "./Login.module.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [httpErrorMessage, setHttpErrorMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      phone,
      address,
      password,
    };

    let response;
    try {
      response = await axios.post(
        "http://localhost:3001/api/users/register",
        body
      );
    } catch (error) {
      console.log(error.response.data.message);
      setHttpErrorMessage(error.response.data.message);
    }

    if (response.data) {
      setResponseMessage(response.data.message);
    }
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPassword("");
  };
  return (
    <div className={CssClass.loginDiv}>
      <form onSubmit={handleSubmit}>
        {httpErrorMessage !== "" ? <p>{httpErrorMessage}</p> : ""}
        {responseMessage !== "" ? <p>{responseMessage}</p> : ""}
        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label> <br />
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label> <br />
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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

export default Register;

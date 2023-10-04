import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiUrl}/auth/local/register`,
        {
          username,
          email,
          password,
        }
      );

      console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);

      navigate("/");
    } catch (error) {
      setError("An error occurred: " + error.response);
    }
  };

  return (
    <div className="container">
      <h2>
        FII MEMBRU <br />
        Magazin Online
      </h2>
      <p>Alătură-te acum și oferim o reducere suplimentară de -10%!</p>
      <div className="content">
        <div>
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-purple-700" type="submit">Creeaza Cont</button>
          </form>
          {error && (
            <p style={{ color: "red" }}>Email sau Username deja existente!</p>
          )}
          <p>Ai deja cont? <Link className="link" to="/login">Logheaza-te</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;

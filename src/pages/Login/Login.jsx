import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.scss";
import AuthContext from "../../components/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiUrl}/auth/local`,
        {
          identifier: email,
          password: password,
        }
      );

      localStorage.setItem('jwt', response.data.jwt);
      login();
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
        <form onSubmit={loginUser}>
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
          <button className="bg-purple-700" type="submit">Login</button>
        </form>
        {error && (
          <p style={{ color: "red" }}>Email sau Username deja existente!</p>
        )}
        <p>Nu ai cont? <Link className="link" to="/register">Creaza cont</Link></p>
      </div>
    </div>
  </div>
  )
}

export default Login
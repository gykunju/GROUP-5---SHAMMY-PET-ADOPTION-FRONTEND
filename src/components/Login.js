import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./styles.css";
import { useLogin } from "./UserContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useLogin();
    const navigate = useNavigate();
    const [state, setState] = useState("wrong")

    function handleLogin(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
      .then((data) => {
        login(data)
        setState("correct")
        navigate("/pets")
      });
  }
  return (
    <div className="form-div">
      <h2>SHAMMY PET ADOPTION</h2>
    <form onSubmit={handleLogin} className="form">
      <h1>LOGIN</h1>
      <label>Email
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </label>
      <label>Password
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </label>
      <button type="submit" >Login</button>
    </form>
    </div>
  );
}
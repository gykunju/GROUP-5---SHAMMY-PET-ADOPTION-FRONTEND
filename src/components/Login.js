import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./UserContext";
// Import your CSS file for styling

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_name, setUser_name] = useState("");
  const { login } = useLogin();
  const navigate = useNavigate();
  const [state, setState] = useState("login");

  function handleLogin(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("Wrong password or username");
          throw new Error("Login failed");
        }
      })
      .then((data) => login(data))
      .then(() => navigate("/pets"))
      .catch((error) => console.error(error));
  }

  function handleSignup(e) {
    e.preventDefault();

    const data = {
      email,
      password,
      user_name,
      admin: false,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Signup failed");
        }
      })
      .then(() => {
        login(data)
        alert("Signup successful. Please log in.");
        navigate("/pets");
      })
      .catch((error) => console.error(error));
  }

  function handlePress() {
    if (state === "login") {
      setState("signup");
    } else {
      setState("login");
    }
  }

  return (
    <div>
      {state === "login" ? (
        <div className="form-div">
          <h2>SHAMMY PET ADOPTION</h2>
          <form onSubmit={handleLogin} className="form">
            <h1>LOGIN</h1>
            <label>Email  :
            <input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </label>
            <label>Password :  
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            <button type="submit" className="submit-button">Login</button>
            <button onClick={handlePress}>
              {state === "login" ? "Sign Up" : "Login"}
            </button>
          </form>
        </div>
      ) : (
        <div className="form-div">
          <h2>SHAMMY PET ADOPTION</h2>
          <form onSubmit={handleSignup} className="form">
            <h1>SIGNUP</h1>
            <label>Email  :
            <input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </label>
            <label>UserName  :
            <input
              placeholder="user name"
              type="text"
              value={user_name}
              onChange={(e) => setUser_name(e.target.value)}
            />
            </label>
            <label>Password  :
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            <button type="submit" className="submit-button">Sign Up</button>
            <button onClick={handlePress}>
              {state === "login" ? "Sign Up" : "Login"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

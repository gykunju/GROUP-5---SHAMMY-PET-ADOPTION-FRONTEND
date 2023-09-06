import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useLogin } from "./UserContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useLogin();
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" }
        })
        .then((res) => res.json())
      .then((data) => {
        login(data);
        navigate("/");
      });
  }
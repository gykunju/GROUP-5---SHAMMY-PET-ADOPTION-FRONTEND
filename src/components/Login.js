import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useLogin } from "./UserContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useLogin();
    const navigate = useNavigate();
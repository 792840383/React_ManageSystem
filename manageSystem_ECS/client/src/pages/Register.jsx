import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/register.css';

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        email: "",
    });
    const [err, setErr] = useState(null);
    // const [success, setSuccess] = useState(false);  // 新增状态变量
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        console.log("Register Action");
        e.preventDefault();
        try {
            await axios.post("/auth/register", inputs);
            navigate("/");
            setErr(null);  // 清除任何现有错误
        } catch (err) {
            setErr(err.response.data);
        }
    };

    return (
        <div className='auth1'>
            <div className="container">
                <form onSubmit={handleSubmit} className='form1'>
                    <input placeholder="username" name="username" onChange={handleChange} />
                    <input placeholder="password" name="password" onChange={handleChange} />
                    <input placeholder="email" name="email" onChange={handleChange} />
                    <button type="submit">register</button>
                </form>
                <Link to="/login">Login now</Link>
            </div>
            {err && <p>{err}</p>}
        </div>
    );
};

export default Register;

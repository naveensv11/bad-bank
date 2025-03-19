import React, { useState, useContext } from "react";
//import UserContext from "./context";
import axios from 'axios';

export default function Register() {
    // let users = useContext(UserContext);
    let [Name, setName] = useState('');
    let [Email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(name, email, pass);
        // users.users.push(
        let item = { name: Name, email: Email, password: pass, amount: 1000 };
        axios.post('http://localhost:8080/create',item)
        alert("Submitted Sucessfully");
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
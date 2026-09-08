import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./form.css"



function Login() {

    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    useEffect(function () {
        const isLogin = localStorage.getItem("isLoggedIn");
        if (isLogin === "true") {
            navigate("/");
        }

    }, []);


    async function handleLogin(e) {


        e.preventDefault();

        try {
            const response = await fetch("https://freedo-rentel-stma.vercel.app/api/users");
            const users = await response.json();

            const findUser = users.filter(user => user.number === number && user.password === password);

            if (findUser.length > 0) {
                toast.success("User Login Succesfully");

                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userName", findUser[0].name);
                localStorage.setItem("userEmail", findUser[0].email);
                localStorage.setItem("userNumber", findUser[0].number);

                setTimeout(function () {
                    navigate("/");
                }, 1400);

            } else {
                toast.error("Please Enter Correct Detail");
            }
        } catch (error) {
            toast.error("Server Problem Please Try again later....")
        }
    }




    return (
        <>
            <Toaster position="top-center" />

            <form onSubmit={handleLogin}>
                <h2>Login</h2>

                <div>
                    <label>Mobile Number:</label><br />
                    <input
                        type="tel"
                        placeholder="Enter your number"
                        value={number}
                        onChange={function (e) { setNumber(e.target.value); }}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={function (e) { setPassword(e.target.value); }}
                        required
                    />
                </div>

                <br />
                <button type="submit">Login</button>
            </form>
        </>
    );



}

export { Login };

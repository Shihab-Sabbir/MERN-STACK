import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import img2 from "../images/img2.png";

function Signin() {

    const { state, dispatch } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginUser = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/signin",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email, password
                    })
                });

            const data = await res.json();

            if (data.status === 400 || !data) {
                window.alert("Invalid Login");
                console.log("Invalid Login");
            }
            else {
                dispatch({ type: "USER", payload: true }) //USER here is just a name , this name is used in reducer
                console.log("Login Successful");
                navigate("/About", { replace: true });
            }
        }
        catch (err) { window.alert("Invalid Login"); }


    }
    return (
        <div className="container d-flex justify-content-center row m-auto mt-5 border shadow-lg pt-5 pb-5 ps-5 pe-5 mb-5 bg-body rounded" style={{ width: "fit-content" }}>
            <div className="col ms-auto ps-1 pe-1 d-flex justify-content-center ">
                <div className="col ms-auto "> <img src={img2} alt="SRS_MERN_STACK" style={{ width: "70%" }} /></div>
                <form method="POST" >
                    <h3 className="row ms-auto mb-4 ">Sign In</h3>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col">  <i className="zmdi zmdi-email"></i></div>
                        <div className="col"> <input className="row p-2" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Id"></input></div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col">  <i class="zmdi zmdi-lock"></i></div>
                        <div className="col"> <input className="row p-2" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input></div>
                    </div>
                    <div className="row p-2 m-2 mt-5 justify-content-center "> <button onClick={loginUser}>Login</button></div>

                    <div className="row m-auto  ">
                        <NavLink className="nav-link active m-auto justify-content-center" aria-current="page" to="/Registration">
                            <span className="m-auto d-flex justify-content-center" >Create an Account</span></NavLink>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Signin

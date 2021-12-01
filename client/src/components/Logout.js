import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import img2 from "../images/img2.png";
import { UserContext } from '../App';

function Logout() {
    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();
    const logout = async (e) => {
        e.preventDefault();

        const res = await fetch("/logout",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include" // this is for send cookies token to backend
            }).then(() => {
                dispatch({ type: "USER", payload: false })
                console.log("Logout Successful");
                navigate("/Signin", { replace: true });
            })

    }
    return (
        <div className="container d-flex justify-content-center row m-auto mt-5 border shadow-lg pt-5 pb-5 ps-5 pe-5 mb-5 bg-body rounded" style={{ width: "fit-content" }}>
            <div className="col ms-auto ps-1 pe-1 justify-content-center ">
                <h3 className="row  mb-4 mb-3 d-flex justify-content-center">Logging Out</h3>
                <img className="row mb-4 ms-3 mb-3 d-flex justify-content-center" src={img2} alt="SRS_MERN_STACK" style={{ width: "70%" }} />
                <div className="row mb-4 mb-3 d-flex justify-content-center" style={{ width: "20%", marginLeft: "35%" }} >
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )

}

export default Logout

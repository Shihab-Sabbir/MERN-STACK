import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Position.css"
function Errorpage() {
    return (
        <div className="container mt-5 position2">
            <div className="col position">
                <div className="row "> <strong >404</strong></div>
                <div className="row "> <strong >Page Not Found</strong></div>
                <div className="row justify-content-center"> <button className="mt-3" style={{ width: "15%" }}> <NavLink className="nav-link" style={{ color: "black" }} to="/">Back to Home</NavLink></button></div>
            </div>
        </div>
    )
}

export default Errorpage

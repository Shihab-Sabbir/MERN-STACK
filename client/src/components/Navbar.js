import React, { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo.png";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';
function Navbar() {
    const { state, dispatch } = useContext(UserContext);

    const Rendermenu = () => {
        if (!state)
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signin">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/registration">Signup</NavLink>
                    </li>
                </>
            )
        else if (state) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Logout">Logout</NavLink>
                    </li>
                </>
            )
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#"><img src={logo} alt="SRS_MERN_STACK" style={{ height: "40px", width: "100px" }} /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Rendermenu />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

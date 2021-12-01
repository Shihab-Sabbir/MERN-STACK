import React, { useEffect, useState } from 'react';
import "../App.css";
import { NavLink, useNavigate } from 'react-router-dom';
import img1 from "../images/img1.png";

function Registration() {
    const navigate = useNavigate();
    const [image, setImage] = useState({ pic: "" })
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    })


    const imagehandle = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            name = e.target.name;
            value = e.target.value;
            if (reader.readyState === 2) {
                setImage(reader.result)
            }

        }
        const target = e.target;
        reader.readAsDataURL(e.target.files[0]);
        const maxAllowedSize = 300000;
        if (target.files[0].size > maxAllowedSize) {
            window.alert("Image size is more than 200kB");
            target.value = '';
            window.location.reload();
        }
    }

    let name, value;
    const handleInput = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;
        const { pic } = image;
        //these can be done with axios also but here is fetch api method
        const res = await fetch("/register",
            {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name, email, phone, work, password, cpassword, image
                })
            });

        const data = await res.json();

        if (data.status === 422 || data.status === 421 || data.status === 400 || !data) {
            window.alert("Invalid Registration");
        }

        else {
            navigate("/signin")
        }

    }
    useEffect(() => {
        window.alert("Make sure uploaded image size is under 500KB");
    }, [])

    return (
        <div className="container d-flex justify-content-center row m-auto mt-5 border shadow-lg pt-3 pb-3 ps-0 pe-0 mb-5 bg-body rounded" style={{ width: "fit-content" }} >
            <div className="col ms-auto ps-1 pe-1 d-flex justify-content-center ">
                <form style={{ minWidth: "fit-content" }} method="POST">
                    <h2 className="row p-2 m-2 mb-3">Sign up</h2>

                    <div className="row d-flex align-items-center mb-2">
                        <div className="col">  <i className="zmdi zmdi-account"></i></div>
                        <div className="col"> <input className="row p-2" type="text" name="name" value={user.name} onChange={handleInput} placeholder="First Name"></input></div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col">  <i className="zmdi zmdi-card-travel"></i>
                        </div>
                        <div className="col"> <input className="row p-2" type="text" name="work" value={user.work} onChange={handleInput} placeholder="Last Name"></input></div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col">  <i className="zmdi zmdi-email"></i></div>
                        <div className="col"> <input className="row p-2" type="text" name="email" value={user.email} onChange={handleInput} placeholder="Email Id"></input></div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col">  <i className="zmdi zmdi-phone"></i></div>
                        <div className="col"> <input className="row p-2" type="text" name="phone" value={user.phone} onChange={handleInput} placeholder="Phone Number"></input></div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col">  <i className="zmdi zmdi-lock"></i></div>
                        <div className="col"> <input className="row p-2" type="password" name="password" value={user.password} onChange={handleInput} placeholder="Password"></input></div>
                    </div>
                    <div className="row d-flex align-items-center mb-2">
                        <div className="col">  <i className="zmdi zmdi-lock-outline"></i>
                        </div>
                        <div className="col"> <input className="row p-2" type="password" name="cpassword" value={user.cpassword} onChange={handleInput} placeholder="Confirm Password"></input></div>
                    </div>

                    <div className="row d-flex align-items-center mb-2 mt-3 imgholder">
                        <img className="row img" src={image} alt="Select Image......." style={{ width: "45%", textAlign: "center" }} id="search" />
                        <input className="row mt-2 imginput" type="file" name="image" id="input" accept="image/*"
                            name="pic" value={image.pic} onChange={imagehandle} style={{ width: "35%" }}></input>
                    </div>
                    <button className="row p-2 m-2 mt-4" value="register" onClick={postData}>Register</button>
                </form>
            </div>
            <div className="col ms-auto ps-1 pe-1 d-flex align-items-center">
                <div className="col">
                    <div className="row align-items-center justify-content-center ">
                        <img src={img1} alt="SRS_MERN_STACK" style={{ width: "70%" }} />
                    </div>
                    <div className="row m-auto  ">
                        <NavLink className="nav-link active m-auto justify-content-center" aria-current="page" to="/SignIn">
                            <span className="m-auto d-flex justify-content-center" >Already Registered?</span></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration

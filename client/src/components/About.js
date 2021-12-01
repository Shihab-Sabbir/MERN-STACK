import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Loading from './Loading';


function About() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const callAboutePage = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include" // this is for send cookies token to     
            });
            setLoading(false);
            const data = await res.json();
            setUserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch (err) {
            console.log("No data")
            navigate("/Signin");
        }
    }
    useEffect(() => {
        callAboutePage();
    }, [])

    if (loading) {
        return <Loading/>;
      }


    return (
        <div className="container d-flex justify-content-center row m-auto mt-5 border shadow-lg pt-5 pb-5 ps-5 pe-5 mb-5 bg-body rounded" style={{ width: "fit-content" }}>
            <div className="col">
                <img className="row" src={userData.image} alt="" style={{ width: "43%" }} />
            </div>
            <div className="col d-grid align-items-center">
                <strong className="row">First Name : {userData.name}  </strong>
                <strong className="row">Last Name : {userData.work} </strong>
                <strong className="row">Email : {userData.email} </strong>
                <strong className="row">Phone : {userData.phone} </strong>
            </div>
            <div className="row justify-content-center"> <button className="mt-3" style={{ width: "20%" }}> <NavLink className="nav-link" style={{ color: "black" }} to="/Edit">Edit Data</NavLink></button></div>

        </div>

    )



}

export default About

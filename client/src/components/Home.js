import React, { useEffect, useState } from 'react'
import "../Conn.css";
function Home() {
    const [userData, setUserData] = useState([]);
    const [show, setShow] = useState(false);
    const NEwdata = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include" // this is for send cookies token to backend
            });
           
            const data = await res.json();
            console.log(userData);
            setUserData(data.name);
            setShow(true);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch (err) {
            console.log("No data")
        }
    }
    useEffect(() => {
        NEwdata();
    }, [])

    

    return (
        <div className="container-fluid mybg d-flex justify-content-center align-items-center ps-5">
            <div className="row d-flex justify-content-center">
                <a className="text-center" style={{ fontWeight: "800", fontSize: "40px", textDecoration: "none", color: "black" }} >Welcome</a> <br />
                <a className="text-center" style={{ fontWeight: "600", fontSize: "30px", textDecoration: "none", color: "black", textTransform: "uppercase" }}>{userData}</a>
                <a className="text-center" style={{ textDecoration: "none" }}><h2 style={{ fontWeight: "500", fontSize: "20px", color: "black" }}>{show ? "Happy to get you" : "It is SRS MERN Stack"}</h2></a>
            </div>
        </div>

    )
}

export default Home

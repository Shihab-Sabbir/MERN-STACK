import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import "../Edit.css";
import Loading from './Loading';

function Edit() {
    const navigate = useNavigate();
    const [image, setImage] = useState({ pic: "" });
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        name: "",
        work: "",
        email: "",
        phone: "",
    })

    let name, value;
    const handlechange = (event) => {
        console.log(event);
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })
    }

    const imagehandle = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
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
    useEffect(() => {
        window.alert("Make sure uploaded image size is under 200KB");
    }, [])
    const postData = async (e) => {
        e.preventDefault();
        window.alert("Your informations are updating please visit About tab to view updated informations.");
        setLoading(true);
        const { name, email, phone, work } = user;
        const { pic } = image;
        //these can be done with axios also but here is fetch api method
        const res = await fetch("/update",
            {
                method: "PATCH",
                headers: {

                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name, email, phone, work, image
                })
            });

        const data = await res.json();


        if (data.status === 422 || !data) {
            window.alert("Invalid Edit");
            console.log("Invalid Edit");
        }
        else {
            console.log("Edit Successful");
            window.alert("Edit Successful");
        }

    }

    if (loading) {
        setTimeout(() => { setLoading(false) }, 20000);
        setTimeout(() => { navigate("/About") }, 15000);
        return <Loading />;
    }



    return (
        <div className="container d-flex justify-content-center row m-auto mt-5 border shadow-lg pt-5 pb-5 ps-5 pe-5 mb-5 bg-body rounded" style={{ width: "fit-content" }}>
            <div className="col d-flex align-items-center mb-2 mt-3 imgholder">
                <img className="row img" src={image} alt="Select Image......." style={{ width: "45%", textAlign: "center" }} id="search" />
                <input className="row mt-2 imginput" type="file" name="image" id="input" accept="image/*"
                    name="pic" value={image.pic} onChange={imagehandle} ></input>
            </div>
            <div className="col d-grid align-items-center">
                <strong className="row">First Name : <input type="text" name="name" value={user.name} onChange={handlechange}></input> </strong>
                <strong className="row">Last Name :<input type="text" name="work" value={user.work} onChange={handlechange}></input> </strong>
                <strong className="row">Email :<input type="text" name="email" value={user.email} onChange={handlechange}></input> </strong>
                <strong className="row">Phone :<input type="text" name="phone" value={user.phone} onChange={handlechange}></input> </strong>
            </div>
            <div className="row justify-content-center"> <button className="mt-3" style={{ width: "20%" }} onClick={postData}>Submit Data</button></div>
        </div>
    )
}

export default Edit

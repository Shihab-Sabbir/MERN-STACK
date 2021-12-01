import React from 'react'

function Contact() {
    return (
        <div className="container col">
            <div className="row mt-4 ms-auto pe-5">
                <div className="col me-3 d-flex justify-content-center align-items-center pe-5 ps-5 container bg-light shadow-sm pt-2 pb-1 mb-5 bg-body-light rounded" style={{ maxWidth: "fit-content" }}>
                    <span className="pe-3 ps-2 d-flex align-items-center pb-2" style={{ color: "skyblue" }}><i className="zmdi zmdi-tablet-android zmdi-hc-2x"></i></span>
                    <span className="pe-5 align-items-center">
                        <strong style={{ fontSize: "15px" }}>Phone</strong>
                        <p style={{ fontSize: "12px" }}>+8801521255003</p>
                    </span>
                </div>
                <div className="col me-3 d-flex justify-content-center align-items-center pe-5 ps-5 container bg-light shadow-sm pt-2 pb-1 mb-5 bg-body-light rounded" style={{ maxWidth: "fit-content" }}>
                    <span className="pe-3 ps-2 pb-2 d-flex align-items-center" style={{ color: "skyblue" }}><i className="zmdi zmdi-email-open zmdi-hc-2x"></i></span>
                    <span className="pe-5 align-items-center">
                        <strong style={{ fontSize: "15px" }}>Email</strong>
                        <p style={{ fontSize: "12px" }}>shihab11231@gmail.com</p>
                    </span>
                </div>
                <div className="col me-3 d-flex justify-content-center align-items-center pe-5 ps-5 container bg-light shadow-sm pt-2 pb-1 mb-5 bg-body-light rounded" style={{ maxWidth: "fit-content" }}>
                    <span className="pe-3 ps-2 pb-2 d-flex align-items-center" style={{ color: "skyblue" }}><i className="zmdi zmdi-pin-drop zmdi-hc-2x"></i></span>
                    <span className="pe-5 align-items-center">
                        <strong style={{ fontSize: "15px" }}>Address</strong>
                        <p style={{ fontSize: "12px" }}>Mohammadpur,Dhaka</p>
                    </span>
                </div>
                

            </div>
            <div className="row me-3 d-flex justify-content-center align-items-center pe-5 ps-5 container bg-light shadow pt-4 pb-3 mb-5  bg-body-light rounded ms-auto">
                    
                        <strong style={{ fontSize: "15px" ,textAlign:"center"}}>It is a <h1 style={{color:"red"}}>DUMMY</h1> page</strong>
                        
                </div>

            <div className="row me-3 d-flex justify-content-center align-items-center pe-5 ps-5 container bg-light shadow pt-4 pb-3 mb-5  bg-body-light rounded ms-auto">

                <form>
                    <label><strong>Get in Touch</strong></label>
                    <div className="row mb-3 mt-3 justify-content-around" style={{ width: "1016px" }}>
                        <div className="col"> <input type="text" placeholder="Your Name" className="form-control" /></div>
                        <div className="col"> <input type="text" placeholder="Your Email" className="form-control" /></div>
                        <div className="col"> <input type="text" placeholder="Your Phone Number" className="form-control" /></div>
                    </div>

                    <div className="row mb-4 ms-auto pe-3">
                        <textarea className="form-control" placeholder="Message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn  mb-3" style={{ minWidth: "15%", backgroundColor: "CornflowerBlue" }}>Send Message</button>
                </form>


            </div>
        </div>
    )
}

export default Contact

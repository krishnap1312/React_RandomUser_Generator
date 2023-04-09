import React from "react";
import './RandomUser.css'
const HeaderRandom = () =>{
    return(
        <div className="container-lg-fluid">
            <div className="bg-headers d-flex justify-content-between">
            <img src={"man.png"} height={60} className="m-2 LOGO-header" alt="" />
            <h1 className=" p-2 pe-5 m-1 ">Random <span className="bg-headers-span">User</span> </h1>
            </div>
            <h4 className="text-center " style={{color:"#0E8388", textDecoration:"underline"}}>Generate Random User and Address</h4>
        </div>
    )
}

export default HeaderRandom
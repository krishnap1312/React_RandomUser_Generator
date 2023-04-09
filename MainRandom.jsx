import React, { useEffect, useState } from "react";
import axios from "axios";


const MainRandomUser = () => {
    useEffect(() => {
        UserDetailFetch()

    },[])

    const [tName,settName] = useState("")
    const [fName,setfName] = useState("")
    const [lName,setlName] = useState("")
    const [users, setUsers] = useState([])
    const [image,setImage] = useState({});
    


    const UserDetailFetch = () => {
        axios.get("https://randomuser.me/api/").then((res) => {
            setUsers(res.data.results[0])
            settName(users.name.title)
            setfName(users.name.first)
            setlName(users.name.last)
            setImage(users.picture.large)
            console.log(users);
        })
    }
    return (
        <div>
    
            <div className="" style={{backgroundColor:"#DBE4C6"}}>
                <h1 className="text-center PersonHeaderRandom">Random Person</h1>
                <div className=" ">
                    <center>
                    <img src={users.picture.large} height={200} alt="" />
                    <h4 className="RandomHeaderTitle text-center">{`${users.name.title}`} {users.name.first} {users.name.last}</h4>
                    <p className="p-0 m-0 fs-4 RandomUserDetails">{`Age : ${users.dob.age}`}</p>
                    <p className="p-0 m-0 fs-4 RandomUserDetails">{`cell Phone : ${users.cell}`}</p>
                    <p className="p-0 m-0 fs-4 RandomUserDetails">{`Phone : ${users.phone}`}</p>
                    <p className="p-0 m-0 fs-4 RandomUserDetails">{`Location : {users.location.city}`}</p>
                    <p className="p-0 m-0 fs-4 RandomUserDetails">{`UserName : ${users.login.username}`}</p>
                    <p className="p-0 m-0 fs-4 RandomUserDetails">{`password : ${users.login.password}`}</p>
                    <p><button onClick={UserDetailFetch} className="text-info bg-black p-2 m-3">Another User <span className="bi bi-person-fill text"></span></button></p>
                    </center>
                </div>
            </div>



        </div>
    )
}

export default MainRandomUser
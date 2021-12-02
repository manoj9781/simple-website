import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Logout.css';
function Logout() {


    const navigation = useNavigate();

    useEffect(() => {
        fetch('/logout', {
            method: "get",
            headers: {
                Accept: "application/json",
                "Contect-Type":"application/json"
            },
            credentials:"include"
        }).then((res) => {
            navigation('/login');
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((error) => {
           console.log(error);
       })
   })



    return (
        <>
            <h1>Logout</h1>
        </>
    )
}

export default Logout

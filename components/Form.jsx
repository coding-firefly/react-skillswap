import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants"

import api from "../api"
import "../styles/Styling.css"

function Form({route, method}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            const res = await api.post(route, {username, password})
            if(method==="login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/secure")
            }else{
                navigate("/login")
            }
        }catch(error){
            console.log("Login Failed")
            setLoading(false)
        }
    }

    return <>
        <form 
            onSubmit={handleSubmit} 
            className="js-form">
                
            <h1>{method==="login"? "__LOGIN__": "__REGISTER__"}</h1>
            <input 
                className="js-form-input"
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="E-MAIL"/>

            <input 
                className="js-form-input"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="PASSWORD"/>

            <button 
                className="form-button"
                type="submit">{method==="login"? "Login": "Register"}</button>

        </form>
    </>
}

export default Form
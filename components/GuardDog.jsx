import api from "../api"
import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants"

function GuardDog({children}){
    const [isAuthorized, setIsAuthorized] = useState(null)

    useEffect(() => {
        auth().catch(()=>setIsAuthorized(false))
    }, [])

    const refreshToken = async ()=>{
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try{
            const res = await api.post("/api/token/refresh/", {refresh: refreshToken})
            if(res.status===200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            }
        }catch(error){
            setIsAuthorized(false)
        }
        
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(!token){
            setIsAuthorized(false)
            return
        }

        const decoded = jwtDecode(token)
        const dueDate = decoded.exp
        const current = Date.now()/1000

        if(dueDate< current){
            await refreshToken()
        }
        else{
            setIsAuthorized(true)
        }
    }

    if(isAuthorized===null){
        return <>A Moment..,</>
    }

    return isAuthorized? children: <Navigate to="/login"/>
}

export default GuardDog;


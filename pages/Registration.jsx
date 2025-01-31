import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "../components/Form";

function Registration() {
    const navigate = useNavigate();

    return (
        <>
            <Form route={"/api/user/register/"} method={"register"} />
            <button onClick={() => navigate("/login")}>Login</button>
        </>
    );
}

export default Registration;

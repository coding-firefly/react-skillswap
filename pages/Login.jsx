import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "../components/Form";

function Login() {
    const navigate = useNavigate();

    return (
        <>
            <Form route={"/api/token/"} method={"login"} />
            <button onClick={() => navigate("/reg")}>Register? Click Here</button>
        </>
    );
}

export default Login;

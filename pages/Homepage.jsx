import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Styling.css'; 

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            <h1>Welcome to Service Exchange</h1>
            <p>
                At Service Exchange, we believe in the power of community and the value of mutual support. Our platform enables individuals to offer their unique skills and services in exchange for services they need. Whether you're a skilled professional, a hobbyist, or someone with a passion for helping others, Service Exchange provides a space for you to connect, collaborate, and grow.
            </p>
            <p>
                By participating in Service Exchange, you can:
            </p>
            <ul>
                <li>Share your expertise and skills with others</li>
                <li>Receive valuable services in return</li>
                <li>Build meaningful connections within the community</li>
                <li>Enhance your personal and professional growth</li>
            </ul>
            <p>
                Join us today and become a part of a thriving community where everyone benefits from the exchange of services. Together, we can create a network of support and collaboration that enriches the lives of all participants.
            </p>
            <h2>Why Service Exchange Works</h2>
            <p>
                Imagine a world where a graphic designer can help a web developer with stunning visuals, while the web developer helps the designer with a personal website. This mutual exchange of skills not only saves money but also fosters a sense of community and collaboration.
            </p>
            <p>
                A person with skill A (e.g., a photographer) might help a person with skill B (e.g., a chef) by providing professional photos for their culinary creations. In return, the chef could offer cooking lessons or catering services. This way, both parties benefit and grow together.
            </p>
            <h2>Promoting Humanity</h2>
            <p>
                At Service Exchange, we believe in the inherent goodness of people. By helping each other, we create a ripple effect of kindness and support that extends beyond our platform. Together, we can build a better world, one service at a time.
            </p>
            <div className="floating-bubble" onClick={() => navigate("/login")}>
                Secure Access
            </div>
        </div>
    );
};

export default HomePage;

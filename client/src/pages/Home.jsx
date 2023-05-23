import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
  
    let navigate = useNavigate(); 
    const routeLogin = () =>{ 
        let path = `/login`; 
        navigate(path);
    }
    return (
        <>
            <section class="Home box">
                <article>
                    <h1>Your medical history in your hands.</h1>
                    <button onClick={routeLogin}>Get Started</button>
                </article>
                <figure>
                    <img src={"/assets/pexels-karolina-grabowska-4386466.jpg"} />
                </figure>
            </section>
        </>
    )
}
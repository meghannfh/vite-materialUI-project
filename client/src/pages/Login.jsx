import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate(); 
    const routeSignUp = () =>{ 
        let path = `/signup`; 
        navigate(path);
    }
    return(
        <>
            <section class='Login box'>
                <section>
                    <h1>Sign In</h1>
                </section>
                <form action="">
                    <article>
                        <h3>Email</h3>
                        <input type="text" />
                    </article>
                    <article>
                        <h3>Password</h3>
                        <input type="password" />
                    </article>
                    <button>Sign In</button>
                    <button onClick={routeSignUp}>Sign Up</button>
                </form>
            </section>
        </>
    ) 
}
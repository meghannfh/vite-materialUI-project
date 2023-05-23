import { Link } from 'react-router-dom';

export default function SignUp() {
    return(
        <>
            <section class='SignUp box'>
                <section>
                    <h1>Sign Up</h1>
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
                    <article>
                        <h3>Retype Password</h3>
                        <input type="password" />
                    </article>
                </form>
            </section>
        </>
    ) 
}
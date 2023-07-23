import React from 'react';

export default function Login() {
    const [sign, setSign] = React.useState(false);
    const handleClick = _ => {
        event.preventDefault();
        setSign(!sign);
    }
    if (sign) {
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
                        <button>Sign Up</button>
                        <button onClick={handleClick}>Sign In</button>
                    </form>
                </section>
            </>
        ) 
    }
        return(
            <>
                <section class='SignUp box'>
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
                        <button onClick={handleClick}>Sign Up</button>
                    </form>
                </section>
            </>
        )
}
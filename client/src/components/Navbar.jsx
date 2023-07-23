import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
    <header class='navbar'>
        <article>
            <Link to='/'><img src="\assets\noun-healthcare-199761.svg" alt="" /></Link>
        </article>
        <article></article>
        <article>
            <ul>
                <Link to='/login'><button>Login</button></Link>
            </ul>
        </article>
    </header>
    )
}
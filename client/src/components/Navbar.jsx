import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <header>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/signup'>SignUp</Link>
            <Link to='/addCard'>AddCard</Link>
        </div>
    </header>
    )
}
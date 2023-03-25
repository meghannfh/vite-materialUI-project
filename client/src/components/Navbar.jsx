import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <header>
        <div>
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="/signup">
                <h3>Signup</h3>
            </Link>
        </div>
    </header>
    )
}
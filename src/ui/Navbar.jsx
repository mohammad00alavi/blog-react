import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/add-post">Add Blog Post</Link>
        </div>
    );
}

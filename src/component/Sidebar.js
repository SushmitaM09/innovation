import { Link } from "react-router-dom" ;

export default function Sidebar(){

    return(
        <nav className="d-flex gap-3">
           <Link to="/">Dashboard</Link>
           <Link to="/profile">Profile</Link>
           <Link to="/link">About</Link>
           <Link to="/contact">Contact</Link>
           <Link to ="/blog">blog</Link> 
           <Link to="hook">Hook</Link>
           <Link to="fetch">Fetch</Link>
        </nav>
    )
}
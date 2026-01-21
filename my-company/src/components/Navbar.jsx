import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/Contact">Contact</Link>
        <br />
        <Link to="/Services">Services</Link>
        <br />
      </ul>
    </nav>
  );
}

export default Navbar;

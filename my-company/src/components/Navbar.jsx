import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "white", display: "flex", justifyContent: "space-around" }}>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Services">Services</Link>
    </nav>
  );
}

export default Navbar;

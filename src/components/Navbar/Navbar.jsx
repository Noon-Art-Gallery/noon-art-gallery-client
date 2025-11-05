import "./Navbar.scss";
import logo from "/logo/logo-large.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img className="logo__header" src={logo} alt="Logo" />
      </div>
      <ul className="navbar__links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

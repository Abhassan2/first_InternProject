import { NavLink } from "react-router-dom";
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div><h1>EFS</h1></div>
        <div>Event Feedback System</div>
      </div>
      <div className="navbar-links">
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='/feedback'> Feedback</NavLink></li>
            <li><NavLink to='/allfeedback'>Submitted Feedback</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <MenuIcon className="menu-icon" style={{ fontSize: "2.25rem" }} />

        <div className="navbar-logo">
          <div>
            <h1>EFS</h1>
          </div>
          <div>Event Feedback System</div>
        </div>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/feedback"> Feedback</NavLink>
          </li>
          <li>
            <VisibilityOutlinedIcon />
            <NavLink to="/allfeedback"> Feedback</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

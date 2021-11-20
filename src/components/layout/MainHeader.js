import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/welcome">Welcome</Link>
            </li>
          )}
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

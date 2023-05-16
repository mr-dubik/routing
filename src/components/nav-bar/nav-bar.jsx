import { NavLink } from "react-router-dom";
import cn from "classnames";

function NavBar({ user, onAuthButtonClick }) {
  const activeClassName = "underline";

  return (
    <div>
      <nav>
        <ul className="NavBar__list">
          <li>
            <NavLink
              className={({ isActive }) =>
                cn("App-link ", { [activeClassName]: isActive })
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn("App-link ", { [activeClassName]: isActive })
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn("App-link ", { [activeClassName]: isActive })
              }
              to="/account"
            >
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn("App-link ", { [activeClassName]: isActive })
              }
              to="/wallet"
            >
              Wallet
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={onAuthButtonClick}>
        {user ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

export default NavBar;

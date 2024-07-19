import { NavLink } from "react-router-dom";

const activeStyles = "text-green-bytes";
const inactiveStyles = "text-white";
export const NavBar = () => {
  return (
    <nav className="space-x-3">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >Página Inicial
      </NavLink>

      <NavLink
        to={"/lists"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >Byters
      </NavLink>

      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >Contactos
      </NavLink>
    </nav>
  );
};

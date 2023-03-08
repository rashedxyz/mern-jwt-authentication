import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      {user ? (
        <>
          <p>Welcome {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;

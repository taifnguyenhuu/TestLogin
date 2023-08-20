import "./navbar.css";
import vietnam from "../../images/vietnam.png";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };
  const hanldeLogin = () => {
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">VNBOOKING</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <img className="imgVN" src={vietnam} alt="" />
            <FontAwesomeIcon icon={faCircleQuestion} className="iconQuestion" />
            <span>List your property</span>
            <button onClick={handleRegister} className="navButton">
              Register
            </button>
            <button onClick={hanldeLogin} className="navButton">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

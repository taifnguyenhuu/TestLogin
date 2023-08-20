import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  console.log(user);
  return (
    <>
      <div class="bg-img">
        <div class="content">
          <header>Account?</header>
          <form action="#">
            <div class="field">
              <span class="fa fa-user"></span>
              <input type="text" required placeholder="Username" />
            </div>
            <div class="field space">
              <span class="fa fa-envelope"></span>
              <input type="email" required placeholder="Enter your email" />
            </div>
            <div class="field space">
              <span class="fa fa-lock"></span>
              <input
                type="password"
                class="pass-key"
                required
                placeholder="Password"
              />
              <span class="show"></span>
            </div>
            <div class="field space">
              <span class="fa fa-lock"></span>
              <input
                type="password"
                class="pass-key"
                required
                placeholder="Confirm password"
              />
              <span class="show"></span>
            </div>
            <div class="policy">
              <input type="checkbox" />
              <div> I accept all terms & conditions</div>
            </div>
            <div class="field">
              <button className="field-button">Register</button>
            </div>
          </form>
          <div class="line"></div>
          <div class="links">
            <div class="facebook">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="google">
              <i class="fab fa-google"></i>
            </div>
          </div>
          <div class="login">
            Already have an account?
            <a href="/login"> Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

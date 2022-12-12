import "./style.css";
import { logout } from "../../../Configs/Authentication-Firebase/authentication";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const LogoutButton = () => {
    logout();
    navigate("/");
  };
  return (
    <button className="logout" onClick={LogoutButton}>
      Log out
    </button>
  );
};
export default Logout;

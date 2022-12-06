import "./style.css";
import { logout } from "../../../Configs/Authentication-Firebase/authentication";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <button className="logout" onClick={logout}>
      Log out
    </button>
  );
};
export default Logout;

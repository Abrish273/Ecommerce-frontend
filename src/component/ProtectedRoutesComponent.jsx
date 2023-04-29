import { Outlet, Navigate } from "react-router-dom";
import userChatComponent from "./user/userChatComponent";

const ProtectedRoutesComponent = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <userChatComponent />
        <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default ProtectedRoutesComponent;

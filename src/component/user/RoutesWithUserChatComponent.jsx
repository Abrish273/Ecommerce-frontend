import React from "react";
import { Outlet } from "react-router-dom";
import UserChatComponent from "./userChatComponent";

const RoutesWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};

export default RoutesWithUserChatComponent;

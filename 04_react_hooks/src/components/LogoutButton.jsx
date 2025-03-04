// src/components/LogoutButton.jsx
import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const LogoutButton = () => {
  const { logout } = useContext(UserContext); // 从 UserContext 中获取登出方法

  return (
    <button className="logout-button" onClick={logout}>
      登出
    </button>
  );
};

export default LogoutButton;

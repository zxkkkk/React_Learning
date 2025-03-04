import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserStatus = () => {
  const { user } = useContext(UserContext); // 从 UserContext 中获取用户状态

  return <div>{user ? <p>当前用户：{user.username}</p> : <p>未登录</p>}</div>;
};

export default UserStatus;

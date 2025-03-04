import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  // 使用 useContext Hook 从 UserContext 中获取当前的用户信息
  const user = useContext(UserContext);

  // 渲染组件，显示用户信息
  return <div>欢迎你, {user.name}!</div>;
};

export default UserProfile;

import { UserContext } from "../context/UserContext";
import UserProfile from "./UserProfile";

const UserPage = () => {
  // 定义用户信息
  const user = { name: "张三" };

  // 使用 UserContext.Provider 将用户信息传递给子组件
  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
};

export default UserPage;

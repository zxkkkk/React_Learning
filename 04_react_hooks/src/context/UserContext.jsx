import React, { createContext, useState } from "react";

// 创建 UserContext
export const UserContext = createContext();

// 创建 UserProvider 组件
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 用户状态，默认为 null（未登录）

  // 登录方法
  const login = (username, password) => {
    // 模拟登录：如果用户名和密码都存在，则认为登录成功
    if (username && password) {
      setUser({ username });
    }
  };

  // 登出方法
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

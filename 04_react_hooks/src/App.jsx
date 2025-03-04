import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import FetchData from "./components/FetchData";
import PageTitle from "./components/PageTitle";
import Time from "./components/Time";
import Weather from "./components/Weather";
import { UserProvider } from "./context/UserContext";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import UserStatus from "./components/UserStatus";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ThemeProvider from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import UserPage from "./components/UserPage";
import ListFilter from "./ListFilter";
// const ListFilterParent = () => {
//   const [query, setQuery] = useState("");
//   const items = ["Apple", "Banana", "Orange", "Grape"];
const App = () => {
  return (
    // <div>
    //   {/* <ThemeToggle /> */}
    //   {/* <TextInput /> */}
    //   {/* <TodoList /> */}
    //   {/* <FetchData /> */}
    //   {/* <PageTitle /> */}
    //   {/* <Time /> */}
    //   {/* <Weather /> */}
    // </div>
    // <UserProvider>
    //   <div>
    //     <h1>用户登录状态管理</h1>
    //     <UserStatus /> {/* 显示用户登录状态 */}
    //     <LoginForm /> {/* 登录表单 */}
    //     <LogoutButton /> {/* 登出按钮 */}
    //   </div>
    // </UserProvider>
    // <Counter />
    <Form />
    // <div>
    //   <ThemeProvider>
    //     <ThemeButton />
    //   </ThemeProvider>
    // </div>
    // <div>
    //   <UserPage />
    // </div>
    // <div>
    // <input
    //   type="text"
    //   value={query}
    //   onChange={(e) => setQuery(e.target.value)}
    //   placeholder="Search"
    // />
    // <ListFilter items={items} query={query} />
    // </div>
  );
};

export default App;

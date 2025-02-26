import "./App.css";

// import WelcomeClass from "./components/WelcomeClass";
// import WelcomeFunc from "./components/WelcomeFunc";
// import WelcomeStudent from "./components/WelcomeStudent";
// import RandomName from "./components/RandomName";

// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

// import UserPage from "./components/UserPage";
// import Button1 from "./components/Button1";
// import InputParent from "./components/InputParent";
// import RegistPage from "./components/RegistPage";

import Card from "./components/Card"; // 确保路径正确

const App = () => {
  // const handleClick = () => {
  //   alert("点击了按钮111！");
  // };
  return (
    // <>
    //   {/* <WelcomeClass name="World" /> */}
    //   {/* <WelcomeFunc name="React 组件" /> */}
    //   {/* <WelcomeStudent
    //     name="zxk"
    //     age={20}
    //     avatar="https://zxkkk-bucket.oss-cn-nanjing.aliyuncs.com/54b95244-68f1-4693-93de-bc6a9460879c.png"
    //   /> */}
    //   {/* <RandomName /> */}
    //   {/* <Header />
    //   <Main />
    //   <Footer /> */}
    //   {/* <Button1 onClick={handleClick}>点击我</Button1> */}
    //   {/* <UserPage /> */}
    //   {/* <InputParent /> */}
    //   {/* <RegistPage /> */}
    //   {/* <WelcomeStudent name="zxk" age={20} avatar="" /> */}
    // </>
    <div className="app">
      <Card
        header={<h1>这是标题</h1>}
        body={
          <div>
            这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
          </div>
        }
        footer={<button>点击按钮</button>}
      />
    </div>
  );
};

export default App;

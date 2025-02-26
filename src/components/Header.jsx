import { Anchor } from "antd";

const Header = () => {
  return (
    <div style={{ background: "#FFBCD6", padding: "20px" }}>
      <Anchor
        direction="horizontal"
        items={[
          { href: "#home", title: "首页" },
          { href: "#email", title: "邮件" },
          { href: "#setting", title: "设置" },
        ]}
      />
    </div>
  );
};

export default Header;

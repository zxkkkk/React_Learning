import Card from "./my-card/card";

const MainProductList = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Card
        pic="https://images.pexels.com/photos/2840899/pexels-photo-2840899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="标题1"
        text="文本1"
      />
      <Card
        pic="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="标题2"
        text="文本2"
      />
      <Card
        pic="https://images.pexels.com/photos/4253829/pexels-photo-4253829.jpeg"
        title="标题3"
        text="文本3"
      />
    </div>
  );
};

export default MainProductList;

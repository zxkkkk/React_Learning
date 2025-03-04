import { Carousel } from "antd";

const MainBanner = () => {
  return (
    <div>
      <Carousel
        slidesToShow={1}
        slidesToScroll={1}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div>
          <img
            src="https://images.pexels.com/photos/2840899/pexels-photo-2840899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="100%"
            height="500px"
            alt="Banner 1"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="100%"
            height="500px"
            alt="Banner 2"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/4253829/pexels-photo-4253829.jpeg"
            width="100%"
            height="500px"
            alt="Banner 3"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MainBanner;

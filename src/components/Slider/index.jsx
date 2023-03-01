import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  { url: "https://cdn.vectorstock.com/i/1000x1000/20/18/laundry-express-service-advertising-poster-vector-31032018.webp" },
  { url: "https://www.upflip.com/wp-content/uploads/2021/02/laundromat-business-from-inside.jpg" },
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/237/200/300" },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;

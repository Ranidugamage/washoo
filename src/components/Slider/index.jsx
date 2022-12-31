import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/237/200/300" },
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
        height={200}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;

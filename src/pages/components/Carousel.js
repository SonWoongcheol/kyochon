import event from "../../event.json";

const Carousel = () => {
  const eventMain = event.event.filter((ele) => ele.theme === "main");

  return (
    <div className="h-2/5 oveflow-x flex bg-white relative">
      {eventMain.map((img, index) => {
        return <img className="w-full object-contain flex-none" key={index} src={img.src} alt={img.name}></img>;
      })}
    </div>
  );
};

export default Carousel;

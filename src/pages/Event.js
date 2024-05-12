import Header from "./components/Header";
// import HeaderNav from "./components/HeaderNav";
import EventList from "./components/EventList";
import TopMenu from "./components/TopMenu";
import Content from "./components/Content";

import image from "../event.json";

const Event = () => {
  const eventNow = image.event.filter((ele) => ele.theme === "now");

  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-base bg-white">
        <TopMenu link="/eventNow" title="진행 이벤트" select="text-orange-500" />
        <TopMenu link="/eventEnd" title="종료 이벤트" />
      </nav>
      <Content>
        <div>
          {eventNow.map((img, index) => {
            return <EventList key={index} src={img.src} name={img.name} date={img.date}></EventList>;
          })}
        </div>
      </Content>
    </>
  );
};

export default Event;

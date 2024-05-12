import Header from "./components/Header";
import Content from "./components/Content";

import TopMenu from "./components/TopMenu";

import EventList from "./components/EventList";

import image from "../event.json";

const EventEnd = () => {
  const eventEnd = image.event.filter((ele) => ele.theme === "end");

  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-base bg-white">
        <TopMenu link="/eventNow" title="진행 이벤트" />
        <TopMenu link="/eventEnd" title="종료 이벤트" select="text-orange-500" />
      </nav>
      <Content>
        <div className="">
          {eventEnd.map((img, index) => {
            return <EventList key={index} src={img.src} name={img.name} date={img.date}></EventList>;
          })}
        </div>
      </Content>
    </>
  );
};

export default EventEnd;

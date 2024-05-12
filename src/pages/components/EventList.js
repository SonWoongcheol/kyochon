const EventList = (props) => {
  return (
    <>
      <div className="w-11/12 px-4 py-7 ml-auto mr-auto mb-4 border-b border-solid border-gray-200 text-left">
        <div className="font-bold text-lg mb-1">{props.name}</div>
        <div className="text-sm text-gray-300 mb-2">{props.date}</div>
        <img className="w-full" src={props.src} alt={props.name}></img>
      </div>
    </>
  );
};

export default EventList;

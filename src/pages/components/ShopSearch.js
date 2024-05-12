const ShopSearch = (props) => {
  return (
    <>
      <div className="px-2 py-3 ml-auto mr-auto mb-4 border-b border-solid border-gray-200 text-left flex items-center">
        <span className="material-symbols-outlined basis-1/6 text-6xl pr-2">home_pin</span>
        <div className="text-lg basis-4/6">
          <div>
            {props.name} {props.callNumber}
          </div>
          <div className="leading-5">{props.address}</div>
        </div>
        <div className="text-base text-orange-500 basis-1/6 pl-2">{props.distance}</div>
      </div>
    </>
  );
};

export default ShopSearch;

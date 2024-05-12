import { Link } from "react-router-dom";

const MenuList = (props) => {
  return (
    <>
      <div className="ml-auto mr-auto border-b border-solid border-gray-200 text-left flex justify-between items-center">
        <Link to="/Menu" className="basis-5/6 flex justify-between items-center px-4 py-8">
          <div className="basis-1/2 h-fit">
            <img className="w-full" src={props.src} alt={props.name} />
          </div>
          <div className="basis-1/2 text-xl leading-10">
            <div>{props.name}</div>
            <div>{props.price}</div>
          </div>
        </Link>
        <button className="material-symbols-outlined text-3xl basis-1/6">add_shopping_cart</button>
      </div>
    </>
  );
};

export default MenuList;

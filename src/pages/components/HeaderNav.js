const HeaderNav = (props) => {
  let style = props.menu.length < 5 ? `basis-1/${props.menu.length} flex-none ` : "basis-1/5 flex-none ";

  // console.log(props.parent); 상위 component

  // const btnSelected = () => {
  //   const color = "text-orange-500";
  //   const menuAll = Array.from(e.target.closest("nav").children);
  //   menuAll.forEach((e) => (e.className = style));

  //   e.target.className = style + color;

  //   props.parent(e.target.textContent);
  // };

  return (
    <nav className="h-12 px-2 flex bg-white overflow-hidden text-base">
      {props.menu.map((menu, index) => {
        return (
          <button className={style} key={index}>
            {menu}
          </button>
        );
      })}
    </nav>
  );
};

export default HeaderNav;

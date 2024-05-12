import Header from "./components/Header";
import Content from "./components/Content";

import MenuList from "./components/MenuList";

import TopMenu from "./components/TopMenu";

import menu from "../menu.json";

const Menu = () => {
  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-base bg-white">
        <TopMenu link="/menu" title="전체 메뉴" select="text-orange-500" />
        <TopMenu link="/menu/kyochon" title="교촌" />
        <TopMenu link="/menu/black" title="블랙" />
        <TopMenu link="/menu/honey" title="허니" />
        <TopMenu link="/menu/red" title="레드" />
      </nav>
      <Content>
      <div>
          {menu.menu.map((menu, index) => {
              return (
                  <MenuList key={index} src={menu.src} name={menu.name} price={menu.price} />
              )
          })}
      </div>
      </Content>
    </>
  );
};

export default Menu;

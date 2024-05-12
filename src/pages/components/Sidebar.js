import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import SidebarContents from "./SidebarContents";

/*
  side toggle bar의 조건
  메뉴 키 그리고 뒤에 shadow를 누르면 toggle 기능
  shadow는 사라지는 동작까지 아래가 동작하지 않아야 함
  원할 때 오른쪽 왼쪽 구분 가능해야 함
*/

const Sidebar = (props) => {
  const sidebarClassname = "max-w-sm w-full h-screen absolute top-0 -left-full transition-[left] z-15 ";
  const shadowClassname = "w-[200vw] h-screen bg-black absolute left-0 duration-300 transition-[opacity] ";
  const contents = "w-3/4 h-screen bg-white px-5 absolute top-0 duration-300 transition-[left] z-50 ";

  const [sidebar, setSidebar] = useState(sidebarClassname + "-z-10");
  const [shadow, setShadow] = useState(shadowClassname + "opacity-0");

  const on = () => {
    setSidebar(sidebarClassname + "left-0");
    setShadow(shadowClassname + "opacity-60 z-50");
  };

  const off = () => {
    setSidebar(sidebarClassname + "-left-full");
    setShadow(shadowClassname + "opacity-0");
  };

  useEffect(() => {
    if (props.active === "active") {
      on();
    } else {
      off();
    }
  }, [props.active]);

  return (
    <>
      <div id="sidebar" className={sidebar}>
        <div id="shadow" className={shadow} />
        <div id="contents" className={contents}>
          <div id="top" className="h-12 flex justify-end items-center border-b border-solid border-gray-200">
            <span className="material-symbols-outlined">person</span>
            <span className="material-symbols-outlined ml-3">notifications_active</span>
          </div>
          <div className="flex border-b border-solid pb-6 border-gray-200">
            <article id="deliveryOrder" className="bg-gray-200 rounded-xl m-3 w-2/5 p-3">
              <div>
                <span className="material-symbols-outlined text-5xl">motorcycle</span>
                <div className="text-lg">배달주문</div>
              </div>
            </article>
            <article id="takeOrder" className="bg-gray-200 rounded-xl m-3 w-2/5 p-3">
              <div>
                <span className="material-symbols-outlined text-5xl">local_mall</span>
                <div className="text-lg">포장주문</div>
              </div>
            </article>
          </div>
          <SidebarContents>
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined mr-3">radio_button_checked</span>
              포인트
            </div>
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined mr-3">local_activity</span>
              E-쿠폰
            </div>
          </SidebarContents>
          <SidebarContents>
            <Link className="flex items-center mb-2" to="/Menu">
              <span className="material-symbols-outlined mr-3">menu_book</span>
              메뉴소개
            </Link>
            <Link className="flex items-center mb-2" to="/Shop">
              <span className="material-symbols-outlined mr-3">storefront</span>
              매장찾기
            </Link>
            <Link className="flex items-center mb-2" to="/Event">
              <span className="material-symbols-outlined mr-3">campaign</span>
              이벤트
            </Link>
            <Link className="flex items-center mb-2" to="/Breakdown">
              <span className="material-symbols-outlined mr-3">fact_check</span>
              주문내역
            </Link>
          </SidebarContents>
          <SidebarContents>
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined mr-3">list_alt</span>
              공지사항
            </div>
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined mr-3">find_in_page</span>
              이용안내
            </div>
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined mr-3">settings</span>
              설정
            </div>
          </SidebarContents>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

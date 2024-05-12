import Header from "./components/Header";
import Content from "./components/Content";

import TopMenu from "./components/TopMenu";

import Map from "./components/Map";

import data from "../shopLocation.json";

const ShopMap = () => {
  const gangnam = data.seoul[0];

  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-base bg-white">
        <TopMenu link="/shopList" title="매장 검색" />
        <TopMenu link="/shopMap" title="내 주변 매장 찾기" select="text-orange-500" />
      </nav>
      <Content>
        <Map />
        <article className="text-lg text-left px-4">
          <div className="py-4 mb-4 flex justify-between border-b border-solid border-slate-200">
            <div>
              {gangnam.name}
              <span className="inline-block text-slate-400 border border-solid border-slate-400 rounded-xl px-2 ml-2">
                준비 중
              </span>
            </div>
            <div className="border border-solid border-orange-500 rounded-xl text-white bg-orange-500 px-2 ">
              길찾기
            </div>
          </div>
          <div id="address" className="flex">
            <div className="basis-1/4">주소</div>
            <div className="basis-3/4">
              <div id="address1" className="flex mb-1">
                <span className="basis-1/4 h-8 border border-solid border-zinc-500 bg-zinc-500 text-center text-white rounded-xl mr-2">
                  도로명
                </span>
                <div className="basis-3/4">{gangnam.address}</div>
              </div>
              <div id="address2" className="flex mb-1">
                <span className="basis-1/4 border border-solid border-zinc-500 bg-zinc-500 text-center text-white rounded-xl mr-2">
                  지번
                </span>
                <div className="basis-3/4">역삼동 619-28</div>
              </div>
            </div>
          </div>
          <div id="num" className="flex mb-1">
            <div className="basis-1/4">전화번호</div>
            <div className="basis-3/4 text-left">{gangnam.callNumber}</div>
          </div>
          <div id="time" className="flex mb-1">
            <div className="basis-1/4">영업시간</div>
            <div className="basis-3/4 text-left">매일 10:00 - 새벽 4:50</div>
          </div>
          <div id="character" className="flex mb-1">
            <div className="basis-1/4">특성</div>
            <div className="basis-3/4 flex">
              <div>
                <span className="material-symbols-outlined text-3xl mr-4">motorcycle</span>
                <div>배달</div>
              </div>
              <div>
                <span className="material-symbols-outlined text-3xl">local_mall</span>
                <div>포장</div>
              </div>
            </div>
          </div>
          <div className="w-4/5 mx-auto text-center p-2 my-4 text-orange-500 border border-solid border-oranger-400 rounded-2xl">
            전화문의
          </div>
        </article>
      </Content>
    </>
  );
};

export default ShopMap;

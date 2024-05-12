import Header from "./components/Header";
import Content from "./components/Content";

import TopMenu from "./components/TopMenu";

import ShopSearch from "./components/ShopSearch";

import shopLocation from "./../shopLocation.json";

const ShopList = () => {
  console.log(shopLocation.seoul);
  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-base bg-white">
        <TopMenu link="/shopList" title="매장 검색" select="text-orange-500" />
        <TopMenu link="/shopMap" title="내 주변 매장 찾기" />
      </nav>
      <Content>
        <form className="w-10/12 mx-auto relative border border-solid border-black rounded-xl mt-4 mb-2">
          <input className="text-lg" type="text" placeholder="매장명을 검색해주세요" value="강남" />
          <span className="material-symbols-outlined absolute top-px">search</span>
        </form>
        <div className="text-lg text-left pl-8 mb-2">
          검색결과 <span className="font-bold">17개의 매장</span>이 있습니다.
        </div>
        <div className="">
          {shopLocation.seoul.map((shop, index) => {
            return (
              <ShopSearch
                key={index}
                location={shop.location}
                name={shop.name}
                callNumber={shop.callNumber}
                address={shop.address}
                distance={shop.distance}
              ></ShopSearch>
            );
          })}
        </div>
      </Content>
    </>
  );
};

export default ShopList;

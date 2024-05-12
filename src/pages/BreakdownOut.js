import Header from "./components/Header";
import Content from "./components/Content";

import TopMenu from "./components/TopMenu";

const BreakdownOut = () => {
  return (
    <>
      <Header />
      <nav className="flex justify-around h-12 items-center text-base bg-white">
        <TopMenu link="/breakdownOut" title="배달/포장 주문" select="text-orange-500" />
        <TopMenu link="/breakdownEcoupon" title="E-쿠폰 주문" />
      </nav>
      <Content>
        <div className="font-bold flex justify-center items-center flex-col relative top-1/4">
          <img src="img/orderList.png" className="w-1/2 mb-4" alt="주문내역이 없습니다." />
          <div>주문내역이 없습니다</div>
        </div>
      </Content>
    </>
  );
};

export default BreakdownOut;

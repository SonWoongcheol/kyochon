import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import Carousel from "./components/Carousel";

const Home = () => {
  return (
    <>
      <Header />
      <Content>
        <Carousel>Carousel</Carousel>
        <div className="p-3 bg-slate-200 h-3/5 min-h-[400px]">
          <article id="login" className="bg-white rounded-xl m-3 mb-0 p-3 flex justify-between">
            <div id="login" className="w-1/2 pr-3 text-xl h-fit self-center">
              <span className="text-orange-500">로그인</span>이
              <br />
              필요합니다!
            </div>

            <div className="w-px h-15 border-r border-dotted border-slate-400"></div>

            <div id="loginInfo" className="w-1/2 pl-3 text-base">
              <div className="flex justify-between">
                <div>포인트</div>
                <div>
                  <span className="text-orange-500">0</span> P
                </div>
              </div>

              <div className="w-full h-px border-t border-dotted border-slate-400"></div>

              <div className="flex justify-between">
                <div>쿠폰</div>
                <div>
                  <span className="text-orange-500">0</span> 개
                </div>
              </div>

              <div className="w-full h-px border-t border-dotted border-slate-400"></div>

              <div className="flex justify-between">
                <div>E-쿠폰</div>
                <div>
                  <span className="text-orange-500">0</span> 개
                </div>
              </div>
            </div>
          </article>
          <article id="deliveryOrder" className="bg-white rounded-xl m-3 w-2/5 float-left p-3">
            <div>
              <span className="material-symbols-outlined text-7xl">motorcycle</span>
              <div className="text-xl">배달주문</div>
            </div>
          </article>
          <article id="takeOrder" className="bg-white rounded-xl m-3 w-2/5 float-right p-3">
            <div>
              <span className="material-symbols-outlined text-7xl">local_mall</span>
              <div className="text-xl">포장주문</div>
            </div>
          </article>
          <article>
            <div id="eCouponOrder" className="bg-white rounded-xl m-3 clear-both p-3 flex justify-center items-center">
              <span className="material-symbols-outlined text-7xl mr-4">local_activity</span>
              <span className="text-xl">E-쿠폰 주문</span>
            </div>
          </article>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default Home;

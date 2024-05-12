import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white h-20 flex items-center relative">
      <Link className="w-1/4" to="/Menu">
        <span className="material-symbols-outlined text-4xl text-orange-500">menu_book</span>
        <div className="text-lg -translate-y-1">메뉴소개</div>
      </Link>

      <div className="absolute top-4 left-1/4 w-px h-12 bg-slate-300"></div>

      <Link className="w-1/4" to="/Shop">
        <span className="material-symbols-outlined text-4xl text-orange-500">storefront</span>
        <div className="text-lg -translate-y-1">매장찾기</div>
      </Link>

      <div className="absolute top-4 left-2/4 w-px h-12 bg-slate-300"></div>

      <Link className="w-1/4" to="/Event">
        <span className="material-symbols-outlined text-4xl text-orange-500">campaign</span>
        <div className="text-lg -translate-y-1">이벤트</div>
      </Link>

      <div className="absolute top-4 left-3/4 w-px h-12 bg-slate-300"></div>

      <Link className="w-1/4" to="/Breakdown">
        <span className="material-symbols-outlined text-4xl text-orange-500">fact_check</span>
        <div className="text-lg -translate-y-1">주문내역</div>
      </Link>
    </footer>
  );
};

export default Footer;

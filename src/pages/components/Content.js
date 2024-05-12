import { useLocation } from "react-router-dom";

const Content = ({ children }) => {
  const location = useLocation();
  const height =
    location.pathname === "/" ? { height: "calc(100vh - 48px - 80px)" } : { height: "calc(100vh - 48px - 48px)" };

  return (
    <main className="bg-white overflow-hidden overflow-y-auto" style={height}>
      {children}
    </main>
  );
};

export default Content;

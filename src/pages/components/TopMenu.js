import { Link } from "react-router-dom";

const TopMenu = (props) => {
  return (
    <Link to={props.link}>
      <span className={props.select}>{props.title}</span>
    </Link>
  );
};

export default TopMenu;

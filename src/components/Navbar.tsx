import { NavLink } from "react-router-dom";
type props = {
  menu: boolean;
};

const Navbar = (props: props) => {
  return (
    <ul
      className={`${
        props.menu ? "hide" : "show"
      } transition-all md:h-auto md:visible md:mr-10 md:flex flex-col md:flex-row`}>
      <NavLink to="/" className={`link`} end>
        Home
      </NavLink>
      <NavLink to="/projects" className="link">
        Projects
      </NavLink>
      <NavLink to="/blog" className="link">
        Blog
      </NavLink>
    </ul>
  );
};
export { Navbar };

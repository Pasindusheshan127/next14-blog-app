import Link from "next/link";
import style from "./links.module.css";
import Navbvarlink from "./navbarLink/NavbarLink";
const Links = () => {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className={style.links}>
      {links.map((link) => (
        <Navbvarlink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;

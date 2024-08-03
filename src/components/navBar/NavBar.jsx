import Link from "next/link";
import Links from "./Links/Links";
import style from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};
export default NavBar;

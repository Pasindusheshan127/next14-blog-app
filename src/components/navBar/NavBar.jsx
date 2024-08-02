import Links from "./Links/Links";
import style from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};
export default NavBar;

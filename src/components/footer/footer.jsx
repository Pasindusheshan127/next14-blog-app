import style from "./footer.module.css";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>Logo </div>
      <div className={style.text}>
        creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

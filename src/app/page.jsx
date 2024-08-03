import Image from "next/image";
import style from "./home.module.css";
const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.textcontainer}>
        <h1 className={style.title}>Create Thought Agency</h1>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          impedit eaque doloremque, nulla fuga magni quasi quia id vero fugit
          odit ratione obcaecati totam deserunt enim inventore sed nesciunt
          cupiditate!
        </p>
        <div className={style.buttons}>
          <button className={style.button}>Learn More</button>
          <button className={style.button}>Contact</button>
        </div>
        <div className={style.brands}>
          <Image src="/brands.png" alt="" fill className={style.brandImage} />
        </div>
      </div>
      <div className={style.imagecontainer}>
        <Image src="/hero.gif" alt="" fill className={style.heroImg} />
      </div>
    </div>
  );
};

export default Home;

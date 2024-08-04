import Image from "next/image";
import style from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={style.container}>
      <div className={style.textcontainer}>
        <h2 className={style.subtitle}>About Agency</h2>
        <h1 className={style.title}>
          We creates digital ideas that are bigger, bolder, brave and better.
        </h1>
        <p className={style.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={style.boxes}>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year Of Experience</p>
          </div>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year Of Experience</p>
          </div>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year Of Experience</p>
          </div>
        </div>
      </div>
      <div className={style.imagecontainer}>
        <Image
          src="/about.png"
          alt="About image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className={style.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;

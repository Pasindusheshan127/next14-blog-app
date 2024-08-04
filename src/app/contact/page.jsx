import Image from "next/image";
import style from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imgcontainer}>
        <Image src="/contact.png" alt="" fill className={style.heroImg} />
      </div>
      <div className={style.formcontainer}>
        <form action="" className={style.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number(optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

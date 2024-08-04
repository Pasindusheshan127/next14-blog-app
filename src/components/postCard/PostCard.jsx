import Image from "next/image";
import style from "./postCard.module.css";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgcontainer}>
          <Image
            src="https://images.pexels.com/photos/27008964/pexels-photo-27008964/free-photo-of-a-tree-is-sitting-on-the-shore-of-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            priority
            className={style.img}
          />
        </div>
        <span className={style.date}>01.01.2024</span>
      </div>
      <div className={style.bottom}>
        <h1 className={style.title}>Title</h1>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non
          excepturi dolor, consequuntur dolores earum vitae laboriosam quaerat
          tempora! Repellat quas qui, nobis nostrum quos similique blanditiis.
          Aut, sit commodi!
        </p>
        <Link className={style.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

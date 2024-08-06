import Image from "next/image";
import styles from "./singlePost.module.css";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
          src="https://images.pexels.com/photos/27008964/pexels-photo-27008964/free-photo-of-a-tree-is-sitting-on-the-shore-of-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          priority
          className={styles.img}
        />
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.title}>Title</div>
        <div className={styles.details}>
          <Image
            src="https://images.pexels.com/photos/7745573/pexels-photo-7745573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
            priority
            className={styles.avatar}
          />
          <div className={styles.detailsText}>
            <div className={styles.detailTitle}>Author</div>
            <div className={styles.detailValue}>Kavindu deshan</div>
          </div>
          <div className={styles.detailsText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>01.05.2024</div>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sint ad
          sit magnam nemo porro saepe odio omnis tempore laudantium atque,
          maxime eveniet soluta praesentium nesciunt itaque corporis architecto
          sapiente.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

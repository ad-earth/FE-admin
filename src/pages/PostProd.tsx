import styles from "./styles/postProd.module.scss";
import PostForm from "../components/postProd/postForm/PostForm";

const PostProd = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>상품등록</p>
      <div className={styles.contentWrapper}>
        <PostForm />
      </div>
    </div>
  );
};

export default PostProd;

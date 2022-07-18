import styles from "./SSLcard.module.css";

const SSLcard = ({ id, desc, text, price }) => {
  return (
    <div className={styles.SSL__card}>
      <div className={styles.num}>{id}</div>
      <div className={styles.top}>
        <p className={styles.first}>{desc}</p>
        <div className={styles.line}></div>
        <p>{text}</p>
      </div>
      <div className={styles.bottom}>
        <p>
          {price} &#8381; <span>/год</span>
        </p>
      </div>
    </div>
  );
};
export default SSLcard;

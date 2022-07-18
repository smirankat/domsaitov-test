import styles from "./DomainName.module.css";

const DomainName = ({ id, domain, price }) => {
  return (
    <div className={`${styles.domain} ${id > 13 && styles.shifted}`}>
      <div className={styles.name}>{domain}</div>
      <div className={styles.price}>
        <p>{price} &#8381;</p>
        <p>в год</p>
      </div>
    </div>
  );
};
export default DomainName;

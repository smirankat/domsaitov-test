import styles from "./Tarif.module.css";

const Tarif = ({ icon, name, desc, productivity, gift, price }) => {
  return (
    <div className={styles.tarif__card}>
      <div className={styles.tarif__name}>
        <img className={styles.icon} src={icon} alt="icon" />
        <div className="name">{name}</div>
      </div>
      <div className={styles.tarif__option}>
        <div className={styles.top}>
          <p className={styles.first}>{desc}</p>
          <p>PHP - 5.6, 7.0, 7.1, 7.2, 7.3, 7.4</p>
          <p>Поддержка любой CMS</p>
          <p>Бесплатные SSL сертификаты Let's Encrypt</p>
          <p>Защита от DDoS</p>
          <p>{productivity}</p>
          <p>{gift}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.new_price}>
            <p>{price} &#8381;</p>
            <p>в месяц</p>
          </div>
          <div className={styles.old_price}>
            <p>117 ₽</p>
            <p>в месяц</p>
          </div>
          <button className="buy-btn">Купить хостинг</button>
        </div>
      </div>
    </div>
  );
};
export default Tarif;

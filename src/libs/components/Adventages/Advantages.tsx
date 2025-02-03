import classNames from "classnames";
import styles from "./Advantages.module.scss";
import FaDna2 from "@/assets/formula2.svg?url";
import { Advantage } from "./types/AdvantagesTypes";
import FaDna3 from "@/assets/formula3.svg?url";
import FaDna1 from "@/assets/formula1.svg?url";

const advantages: Advantage[] = [
  {
    icon: <img src={FaDna1} className={styles.advantageIcon} alt="Formula" />,
    title: "Формула",
    description: "яка працює на молекулярному рівні"
  },
  {
    icon: <img src={FaDna3} className={styles.advantageIcon} alt="Products" />,
    title: "Продукти",
    description: "бренду здатні відновити структуру волосся"
  },
  {
    icon: <img src={FaDna2} className={styles.advantageIcon} alt="Bonds" />,
    title: "Зв’язки",
    description: "відновлюють дисульфідні та водневі зв’язки"
  }
];

export default function Advantages() {
  return (
    <section className={classNames(styles.advantages)}>
      <h2 className={classNames(styles.advantagesTitle)}>Переваги</h2>
      <div className={styles.advantagesContainer}>
        {advantages.map((adv) => (
          <div
            key={adv.title}
            className={classNames(styles.advantageCard, "card")}
          >
            <div className={styles.advantageIconWrapper}>{adv.icon}</div>
            <h3 className={styles.advantageTitle}>{adv.title}</h3>
            <p className={styles.advantageDescription}>{adv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <section className={styles.accordioncard} key={Math.random()}>
        <div className={styles.header} onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <p className={styles.icon}>{isActive ? "-" : "+"}</p>
        </div>
        <div className={styles.content}>
            {isActive && <p>{content}</p>}
        </div>
    </section>
  )
}

export default Accordion;

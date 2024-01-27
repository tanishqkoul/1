import React from "react";
import {getImageUrl} from "../../utils"
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:koul.tanishq111@gmail.com">
            koul.tansihq111@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkdin icon"
          />
          <a href="https://www.linkedin.com/in/tanishq-koul-346436191/">
            linkdin.com/Tanishqkoul
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Githib Icon " />
          <a href="https://github.com/tanishqkoul">github.com/Tanishqkoul</a>
        </li>
      </ul>
    </footer>
  );
};

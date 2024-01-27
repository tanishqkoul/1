import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemsText}>
              <h3>Front-End Developer</h3>
              <p>
                I'm a front-end Developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemsText}>
              <h3>Back-End Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemsText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well.
              </p>
            </div>
          </li>
          {/* Add information about your electrical engineering diploma */}
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/uiIcon.png")}
              alt="Electrical engineering icon"
            />
            <div className={styles.aboutItemsText}>
              <h3>Electrical Engineering Diploma</h3>
              <p>
                I hold a three-year diploma in Electrical Engineering, equipping
                me with a strong foundation in electrical systems and technology.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

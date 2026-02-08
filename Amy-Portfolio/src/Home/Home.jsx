import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scrollFadeIn } from "../utils/animations";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section id="Home" className={styles.heroSection}>
      <motion.div
        className={styles.socialContainer}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/busyavocado/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a
            href="https://www.tiktok.com/@busyavocado"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-tiktok-line"></i>
          </a>
          <a
            href="https://www.youtube.com/@busyavocado"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
      </motion.div>

      <div className={styles.heroContent}>
        <motion.div className={styles.textLayer} {...scrollFadeIn}>
          <div className={styles.textBlockLeft}>
            <p>
              blends <span className={styles.highlight}>fitness</span> with
              family, empowering others to{" "}
              <span className={styles.highlight}>build strength</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.visualLayer}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.imageWrapper} variants={fadeInUp}>
            <img
              src="Images/Hero/Hero_1.svg"
              alt="Amy Fox"
              className={styles.cutoutImage}
            />
          </motion.div>
        </motion.div>

        <motion.div className={styles.textLayer} {...scrollFadeIn}>
          <div className={styles.textBlockRight}>
            <p>
              while cherishing the support of{" "}
              <span className={styles.highlight}>loved ones...</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.stampWrapper}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <img
            src="Images/Hero/spinner_1.svg"
            alt="Certified Coach"
            className={styles.stamp}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

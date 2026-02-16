import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scrollFadeIn, fadeInScroll, arrowInfinite } from "../utils/animations";
import styles from "./Home.module.css";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };


    checkMobile();


    window.addEventListener("resize", checkMobile);


    return () => window.removeEventListener("resize", checkMobile);
  }, []);
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
            href="https://www.instagram.com/amyjeanfox/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a
            href="https://www.tiktok.com/@amyjeanfox"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-tiktok-line"></i>
          </a>
          <a
            href="https://www.youtube.com/@amyfox"
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
            <h2 className={styles.heroSubheading}>
              <span className={styles.highlight}>Motherhood</span> changed your body. It doesn’t have to end your <span className={styles.highlight}>strength</span>.
            </h2>

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
              src={isMobile ? "Images/Hero/Hero_mobile.png" : "Images/Hero/Hero_1.png"}
              alt="Amy Fox"
              className={styles.cutoutImage}
            />
          </motion.div>
          <motion.div className={styles.scrollMore} variants={fadeInScroll}>
            <p>Scroll More</p>
            <motion.i className="ri-arrow-down-s-line" variants={arrowInfinite} animate="animate"></motion.i>
          </motion.div>
        </motion.div>

        <motion.div className={styles.textLayer} {...scrollFadeIn}>
          <div className={styles.textBlockRight}>
            <h2 className={styles.heroSubheading}>
              For mothers who want to feel <span className={styles.highlight}>capable</span> in their bodies, without sacrificing presence, energy, or <span className={styles.highlight}>sanity</span>.
            </h2>
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

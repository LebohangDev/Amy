import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="About" className={styles.aboutSection}>
      <div className={styles.coralPanel}>
        {/* Left Content */}
        <motion.div
          className={styles.leftColumn}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={styles.header}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              My <span className={styles.accentSpan}>Journey</span> of growth
              through the years
            </motion.h2>

            <motion.img
              src="Images/Stars/Stars_2.png"
              alt=""
              className={styles.stars}
              initial={{ opacity: 0, rotate: -15 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <motion.div
            className={styles.bodyText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <p>
              Born and raised in South Africa, now based in Dubai, I speak to
              those navigating the journey of personal growth, where fitness,
              family, and self-discovery intersect. Through a foundation of
              strength, mindfulness, and family values, I guide you to elevate
              your standards.
            </p>
          </motion.div>

          {/* Video Embed Card */}
          <motion.div
            className={styles.videoCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TyERlOFMAQY?si=LcZitBi_YV2tqhOq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Right Content - Collage */}
        <motion.div
          className={styles.rightColumn}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={styles.collageContainer}>
            <motion.img
              src="Images/Amy/Amy_1.jpg"
              alt="Amy 1"
              className={styles.collageImg1}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            />

            <motion.img
              src="Images/Amy/Amy_2.jpg"
              alt="Amy 2"
              className={styles.collageImg2}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            />

            <motion.img
              src="Images/Amy/Amy_3.jpg"
              alt="Amy 3"
              className={styles.collageImg3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className={styles.buttonRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className={styles.btnOutline}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
          </motion.button>

          <motion.button
            className={styles.btnFill}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            BUY PRODUCT
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

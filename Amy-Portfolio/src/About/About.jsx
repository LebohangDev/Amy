import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { floatingVariant1, floatingVariant2, floatingVariant3 } from "../utils/animations";
import styles from "./About.module.css";

const About = () => {
  const navigate = useNavigate();

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
              src="Images/Stars/stars_2.svg"
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
              Built While Raising is an honest guide to building strength during motherhood — not before, not after, but in the middle of real life.
            </p>
            <p>
              Created for mothers who train in the margins of their day, this ebook reframes strength as something that grows alongside fatigue, responsibility, and presence — not at the expense of them.
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
              onClick={() => navigate("/benefits")}
            >
              Learn More
            </motion.button>

            <motion.button
              className={styles.btnFill}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => navigate("/ebook")}
            >
              Start Reading
            </motion.button>
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
          <div className={styles.imgContainer}>
            <motion.img
              src="Images/Amy/Amy_1.jpeg"
              alt="Amy 1"
              variants={floatingVariant1}
              animate="animate"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            />

            <motion.img
              src="Images/Amy/Amy_2.jpeg"
              alt="Amy 2"
              variants={floatingVariant2}
              animate="animate"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />

            <motion.img
              src="Images/Amy/Amy_3.jpeg"
              alt="Amy 3"
              variants={floatingVariant3}
              animate="animate"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default About;

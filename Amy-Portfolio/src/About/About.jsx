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
              Strength doesn’t <span className={styles.accentSpan}>grow</span> in perfect conditions.
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
              There was a time when I believed strength depended on structure — consistent schedules, uninterrupted sessions, and energy I could rely on. I built my body through discipline, repetition, and pushing when things felt hard. And for a while, that worked.
            </p>
            <p>
              Then motherhood arrived, and everything changed. Sleep became unpredictable. Time became fragmented. Energy rose and fell without warning. I could no longer train the way I used to — and for a while, I thought that meant I had lost something.
            </p>
            <p>
              But what I eventually realised is this: strength doesn’t disappear when conditions change. It adapts. It becomes quieter. More sustainable. Less about perfection and more about return. That shift reshaped the way I train, the way I coach, and the way I understand what strength really means in motherhood.
            </p>
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
              Download the Ebook
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

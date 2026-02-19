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
              You were taught that strength requires structure.
              Consistent schedules. Uninterrupted sessions. Energy you can rely on.
            </p>
            <p>
              And for a while, that might have worked.
            </p>
            <p>
              Then motherhood arrived.
            </p>
            <p>
              Sleep became unpredictable.
              Time became fragmented.
              Energy rose and fell without warning.
            </p>
            <p>
              And suddenly, the way you used to train didn’t fit anymore.
            </p>
            <p>
              It’s easy to believe that means you’ve lost something.
              Discipline. Momentum. Progress.
            </p>
            <p>
              But strength doesn’t disappear when conditions change.
              It adapts.
            </p>
            <p>
              It becomes quieter.
              More sustainable.
              Less about perfection — and more about returning.
            </p>
            <p>
              Strength built inside real life often lasts longer than strength built in ideal conditions.
            </p>
            <p>
              This is about learning how to train in the middle of motherhood.
              Not waiting for it to settle.
              Not trying to escape it.
            </p>
            <p>
              But building strength within it.
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

import { motion } from "framer-motion";
import styles from "./MeetAmy.module.css";
import { fadeInUp, fadeIn } from "../utils/animations";

const MeetAmy = () => {
    return (
        <div id="MeetAmy" className={styles.meetAmySection}>
            <div className={styles.container}>

                {/* Text Content */}
                <motion.div
                    className={styles.textContent}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className={styles.heading}>Meet Amy</h2>

                    <h3 className={styles.subHeading}>
                        I didn’t always understand strength the way I do now.
                    </h3>

                    <motion.div
                        className={styles.tabletImageWrapper}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <img src="Images/Amy/Amy_4.jpeg" alt="Amy Fox" className={styles.amyImage} />
                    </motion.div>

                    <div className={styles.bodyText}>
                        <p>
                            For years, I trained hard. I loved pushing my limits, chasing progress, and seeing visible results. Fitness was structure, discipline, and measurable growth. I built my career around that — coaching women, leading group sessions, filming follow-along workouts, and helping clients feel strong in their bodies.
                        </p>

                        <p className={styles.highlightText}>Then I became a mother.</p>

                        <p>
                            And everything I thought I knew about strength had to stretch.
                        </p>

                        <p>
                            Sleep became unpredictable. Time became fragmented. Energy shifted daily. I could no longer train the way I used to — and for a while, I believed that meant lowering my standards.
                        </p>

                        <p>
                            But what it actually required was redefining them.
                        </p>

                        <p>
                            Motherhood didn’t take strength away from me. It reshaped it. It taught me that resilience matters more than routine. That returning matters more than perfection. That strength built inside real life is often stronger than anything created under ideal conditions.
                        </p>

                        <p>
                            Today, I help women build capable, resilient bodies that support their lives — not compete with them. Bodies that can carry children, responsibilities, fatigue, and still grow stronger over time.
                        </p>

                        <p>
                            And yes, aesthetic results can absolutely follow. But they are no longer the only measure of progress. They become a reflection of consistency built in real life — not perfection built in perfect conditions.
                        </p>

                        <div className={styles.quoteBlock}>
                            <p>Because strength should fit inside motherhood.</p>
                            <p>Not require you to step outside of it.</p>
                        </div>
                        <motion.div
                            className={styles.qualificationsCard}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 1.0 }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <h3 className={styles.qualHeading}>Qualifications & Experience</h3>
                            <ul className={styles.qualList}>
                                <li>Qualified NQF Level 5 Personal Trainer (since 2015)</li>
                                <li>Over a decade of experience in the fitness industry</li>
                                <li>Former Program Director and HIIT Specialist at LEAN with Lilly</li>
                                <li>Experienced in filming and delivering follow-along workouts for global audiences</li>
                                <li>Pre and Postnatal certified</li>
                                <li>Worked with hundreds of women through one-to-one coaching and group training</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>


                <motion.div
                    className={styles.imageWrapper}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <img src="Images/Amy/Amy_4.jpeg" alt="Amy Fox" className={styles.amyImage} />
                </motion.div>




            </div>
        </div>
    );
};

export default MeetAmy;

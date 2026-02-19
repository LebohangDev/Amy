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
                            Before becoming a mother, my world revolved around performance. I trained hard. I loved pushing limits. I built visible muscle. I coached women to do the same.
                        </p>

                        <p>
                            Fitness was discipline, structure, measurable progress — and I built my career around it.
                        </p>

                        <p>
                            I qualified as an NQF Level 5 Personal Trainer in 2015 and have spent over a decade coaching women across one-to-one sessions, group training, and global follow-along platforms. I served as Program Director and HIIT Specialist at LEAN with Lilly, helping design programs used by women worldwide. I later expanded my education into pre and postnatal training — a decision that would soon become deeply personal.
                        </p>

                        <p className={styles.highlightText}>Then I became a mother.</p>

                        <p>
                            And everything I thought I knew about strength was tested — not in theory, but in practice.
                        </p>

                        <p>
                            Motherhood didn’t weaken my standards. It refined them. It taught me that resilience matters more than routine. That returning matters more than perfection. That strength built inside real life is the kind that lasts.
                        </p>

                        <p>
                            Today, I help women build capable, resilient bodies that support their lives — not compete with them.
                        </p>

                        <p>
                            And yes, aesthetic results can absolutely follow.
                            But now, they’re a reflection of sustainable strength — not the only goal.
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

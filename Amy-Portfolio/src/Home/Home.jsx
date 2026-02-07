import { motion } from "framer-motion";
import styles from './Home.module.css';

const Home = () => {
    return (
        <section id='Home' className={styles.heroSection}>
            {/* Social Icons - Top Center */}
            <div className={styles.socialContainer}>
                <div className={styles.socials}>
                    <a href="https://www.instagram.com/busyavocado/" target="_blank" rel="noreferrer">
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="https://www.tiktok.com/@busyavocado" target="_blank" rel="noreferrer">
                        <i className="ri-tiktok-line"></i>
                    </a>
                    <a href="https://www.youtube.com/@busyavocado" target="_blank" rel="noreferrer">
                        <i className="ri-youtube-fill"></i>
                    </a>
                </div>
            </div>

            <div className={styles.heroContent}>
                {/* Visual Layer - Typography & Image */}
                <div className={styles.visualLayer}>
                    <h1 className={styles.bigTextLeft}>Amy</h1>

                    {/* Cutout Image */}
                    <div className={styles.imageWrapper}>
                        {/* Assuming Hero_1.svg is the cutout. If not, user needs to provide. */}
                        <img src="Images/Hero/Hero_1.svg" alt="Amy Fox" className={styles.cutoutImage} />
                    </div>

                    <h1 className={styles.bigTextRight}>Fox</h1>
                </div>

                {/* Supporting Text Layer */}
                <div className={styles.textLayer}>
                    <div className={styles.textBlockLeft}>
                        <p>blends <span className={styles.highlight}>fitness</span> with family, empowering others to <span className={styles.highlight}>build strength</span></p>
                    </div>

                    <div className={styles.textBlockRight}>
                        <p>while cherishing the support of <span className={styles.highlight}>loved ones...</span></p>
                    </div>
                </div>

                {/* Stamp - Absolute Upper Right */}
                <div className={styles.stampWrapper}>
                    <img src="Images/Hero/spinner_1.svg" alt="Certified Coach" className={styles.stamp} />
                </div>
            </div>
        </section>
    );
};

export default Home;

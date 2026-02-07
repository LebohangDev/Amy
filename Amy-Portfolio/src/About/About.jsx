import { motion } from "framer-motion";
import styles from './About.module.css';

const About = () => {
    return (
        <section id='About' className={styles.aboutSection}>
            <div className={styles.coralPanel}>

                {/* Left Content */}
                <div className={styles.leftColumn}>
                    <div className={styles.header}>
                        <h2>My <span className={styles.accentSpan}>Journey</span> of growth through the years</h2>
                        <img src="Images/Stars/Stars_2.png" alt="" className={styles.stars} />
                    </div>

                    <div className={styles.bodyText}>
                        <p>Born and raised in South Africa, now based in Dubai, I speak to those navigating the journey of personal growth, where fitness, family, and self-discovery intersect. Through a foundation of strength, mindfulness, and family values, I guide you to elevate your standards.</p>
                    </div>

                    {/* Video Embed Card */}
                    <div className={styles.videoCard}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/4t716_zO96M?si=5t716_zO96M"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Right Content - Collage */}
                <div className={styles.rightColumn}>
                    <div className={styles.collageContainer}>
                        <img src="Images/Amy/Amy_1.jpg" alt="Amy 1" className={styles.collageImg1} />
                        <img src="Images/Amy/Amy_2.jpg" alt="Amy 2" className={styles.collageImg2} />
                        <img src="Images/Amy/Amy_3.jpg" alt="Amy 3" className={styles.collageImg3} />
                    </div>
                </div>

                {/* Buttons - Bottom Center of Panel (or Left depending on flow, design said Bottom Center) */}
                <div className={styles.buttonRow}>
                    <button className={styles.btnOutline}>Learn More</button>
                    <button className={styles.btnFill}>BUY PRODUCT</button>
                </div>

            </div>
        </section>
    );
};

export default About;

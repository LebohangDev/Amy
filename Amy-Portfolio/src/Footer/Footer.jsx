
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContent}>
                    <img src="Images/Logos/footer_logo.svg" alt="Brand Logo" className={styles.brandLogo} />
                    <div className={styles.media}>
                        <p>Media</p>
                        <div className={styles.socialIcons}>
                            <motion.a
                                href="https://www.instagram.com/amyjeanfox/"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i class="ri-instagram-fill"></i>
                            </motion.a>
                            <motion.a
                                href="https://www.tiktok.com/@amyjeanfox"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i class="ri-tiktok-line"></i>
                            </motion.a>
                            <motion.a
                                href="https://www.youtube.com/@amyfox"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i class="ri-youtube-fill"></i>
                            </motion.a>
                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <ul>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Product">Ebook</a></li>
                            <li><a href="#MeetAmy">Meet Amy</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr />
            <p>© 2026 Amy Fox. All rights reserved. | www.creatorsblueprint.net</p>




        </div>
    );
};

export default Footer;

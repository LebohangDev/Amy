import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Nav = ({ activeNav, setActiveNav, containerRef }) => {
  const [hamMenu, setHamMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  let lastScrollTop = 0;

  useEffect(() => {
    const container = containerRef.current;
    const isScrolling = (event) => {
      const currentScrollTop = event.target.scrollTop;
      if (currentScrollTop > lastScrollTop) setIsVisible(false);
      else if (currentScrollTop < lastScrollTop) setIsVisible(true);
      lastScrollTop = currentScrollTop;
    };
    container.addEventListener("scroll", isScrolling);
    return () => container.removeEventListener("scroll", isScrolling);
  }, [lastScrollTop]);

  const handleNavClick = (path, section) => {
    navigate(path);
    setActiveNav(section);
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={isVisible}
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={
            isVisible ? styles.navContainer : styles.navContainer_hidden
          }
        >
          <nav className={styles.nav}>
            <ul className={styles.navInner}>
              <div className={styles.nav_logo}>
                <img src="Images/Logos/nav_logo.svg" alt="Logo" />
              </div>

              <div className={styles.nav_links}>
                <li className={activeNav === "Home" ? styles.active : ""}>
                  <a
                    href="#Home"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("/", "Home");
                    }}
                  >
                    Home
                  </a>
                </li>

                <li className={activeNav === "About" ? styles.active : ""}>
                  <a
                    href="#About"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("/about", "About");
                    }}
                  >
                    The Approach
                  </a>
                </li>

                <li className={activeNav === "MeetAmy" ? styles.active : ""}>
                  <a
                    href="#MeetAmy"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("/meetamy", "MeetAmy");
                    }}
                  >
                    Meet Amy
                  </a>
                </li>

                <li className={activeNav === "Product" ? styles.active : ""}>
                  <a
                    href="#Product"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("/ebook", "Product");
                    }}
                  >
                    Built While Raising
                  </a>
                </li>
              </div>

              <div className={styles.nav_contact}>
                <a
                  href="#Product"
                  className={styles.portfolioBtn}
                >
                  Download Ebook
                </a>
              </div>
            </ul>
          </nav>
        </motion.div>
      </AnimatePresence>

      <div className={styles.hamburgerContainer}>
        <div className={styles.hamHeader}>
          <div className={styles.nav_logo}>
            <img src="Images/Logos/nav_logo.svg" alt="Logo" />
          </div>

          <img
            src="Images/hamburger.svg"
            alt="Menu"
            className={styles.hamburgerIcon}
            onClick={() => setHamMenu(true)}
          />
        </div>

        <AnimatePresence>
          {hamMenu && (
            <motion.div
              className={styles.hamMenuActive}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className={styles.close}>
                <img
                  src="Images/close.svg"
                  alt="Close"
                  className={styles.closeIcon}
                  onClick={() => setHamMenu(false)}
                />
              </div>

              <ul className={styles.hamLinks}>
                <li>
                  <i className="ri-home-6-line"></i>
                  <a
                    href="#Home"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("/", "Home");
                      setHamMenu(false);
                    }}
                  >
                    Home
                  </a>
                </li>

                <li>
                  <i className="ri-user-3-line"></i>
                  <a
                    href="#About"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("/about", "About");
                      setHamMenu(false);
                    }}
                  >
                    The Approach
                  </a>
                </li>

                <li className={activeNav === "MeetAmy" ? styles.active : ""}>
                  <i className="ri-star-line"></i>
                  <a
                    href="#MeetAmy"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("/meetamy", "MeetAmy");
                      setHamMenu(false);
                    }}
                  >
                    Meet Amy
                  </a>
                </li>

                <li>
                  <i className="ri-shopping-cart-2-line"></i>
                  <a
                    href="#Product"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("/ebook", "Product");
                      setHamMenu(false);
                    }}
                  >
                    Built While Raising
                  </a>
                </li>
              </ul>

              <div className={styles.media}>
                <h1>Media</h1>

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
              </div>

              <div className={styles.copyright}>
                <p>
                  © 2026 Diana Zavzeatii. All rights reserved. |
                  www.creatorsblueprint.net
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Nav;

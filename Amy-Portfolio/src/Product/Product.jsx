import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "../utils/animations";
import styles from "./Product.module.css";

const Product = () => {
  const benefitsRef = useRef(null);

  const scrollToBenefits = () => {
    if (benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefitsItems = [
    {
      title: "Strong & Confident ",
      description: "My Post-Baby Fitness Journey (and How to Start Yours!)",
      img: "Images/Benefits/Amy_1.png",
    },
    {
      title: "Health",
      description: "Balancing Fitness and Family (and What’s Working for Me!)",
      img: "Images/Benefits/Amy_2.png",
    },
    {
      title: "Motherhood",
      description: "Strengthening Your Body After Baby (and My Next Steps!)",
      img: "Images/Benefits/Amy_3.png",
    },
    {
      title: "Baby bump to Fit ",
      description: "Embracing Wellness (and What I’m Doing to Stay Healthy!)",
      img: "Images/Benefits/Amy_4.png",
    },
  ];

  const insideItems = [
    {
      title: "A grounded reframe of strength during motherhood",
      icon: "ri-heart-pulse-line",
    },
    {
      title: "Why inconsistency, fatigue, and limited time aren't failures",
      icon: "ri-time-line",
    },
    {
      title: "How to train without guilt or pressure",
      icon: "ri-mental-health-line",
    },
    {
      title: "A sustainable approach to movement, recovery, and mindset",
      icon: "ri-refresh-line",
    },
    {
      title: "Strength that supports the life you're living now",
      icon: "ri-parent-line",
    },
  ];


  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const product = [
    {
      type: "ebook",
      title: "Food for Real Life",
      description:
        "Busy Avocado is about enjoying good food without overcomplicating it.",
      price: 10,
      currency: "usd",
      image: "Images/Ebook/Amy_Lee_Ebook_Cover.png",
      email: email,
      successUrl: "https://busyavocado.com/?payment=success",
      cancelUrl: "https://busyavocado.com/?payment=cancel",
    },
  ];

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setIsEmailValid(validateEmail(val));
  };

  async function handleCheckout(productPayload) {
    try {
      const res = await fetch(
        "https://dianabackend.onrender.com/api/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productPayload),
        },
      );

      const data = await res.json();
      window.location.href = data.url;
    } catch (e) {
      console.error("Payment session failed:", e);
    }
  }

  return (
    <div id="Product" className={styles.ProductContainer}>
      <div className={styles.productSection}>
        <div className={styles.productWrapper}>
          {/* LEFT IMAGE */}
          <motion.div
            className={styles.productLeft}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src="Images/Ebook/Amy_Fox_Ebook_Cover.png" alt="Ebook Cover" />
          </motion.div>


          <motion.div
            className={styles.productRight}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.starsContainer}>
              <img src="Images/Stars/stars_1.svg" alt="" />
            </div>

            <div className={styles.title}>
              <h2>Built</h2>
              <h1>While</h1>
              <h1>Raising</h1>
            </div>

            <div className={styles.tag}>
              <h2>EBOOK</h2>
            </div>

            <div className={styles.productDescription}>
              <p>Fitness & Real Life Guide for Moms</p>
            </div>

            <div className={styles.emailInput}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                disabled={!isEmailValid}
                onClick={() => handleCheckout(product[0])}
              >
                Get Started Now
              </button>
            </div>

            <div className={styles.priceRow}>
              <div className={styles.price}>
                <h1>Price</h1>
                <p>10$</p>
              </div>

              <div className={styles.why} onClick={scrollToBenefits}>
                <h1>Why buy this ebook?</h1>
                <i className="ri-arrow-down-circle-line"></i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WHAT YOU'LL FIND INSIDE SECTION */}
      <div id="Benefits" className={styles.insideContainer}>
        <div className={styles.insideHeader}>

          <h1>What You'll <span>Find Inside</span></h1>

        </div>
        <motion.div
          className={styles.insideGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {insideItems.map((item, index) => (
            <motion.div
              key={index}
              className={styles.insideGridItem}
              variants={fadeInUp}
            >
              <i className={item.icon}></i>
              <p>{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BENEFITS SECTION */}
      <div ref={benefitsRef} className={styles.benefitsContainer}>
        <div className={styles.benefitsWrapper}>
          {/* LEFT SIDE */}
          <div className={styles.benefitsLeft}>
            <h2>Why This Ebook Works</h2>
            <p>
              Because it meets mothers where they actually are.
            </p>
            <p>
              Instead of demanding consistency, perfection, or intensity, Built While Raising reframes strength as something that adapts with motherhood — not something you have to squeeze in or sacrifice for.
            </p>
            <p>
              This isn't about reclaiming an old body. It's about building a capable, resilient one that supports your life now.
            </p>

            <div className={styles.bookStack}>
              <img src="Images/Ebook/Ebook.png" alt="Ebook Stack" />
            </div>

            <a href="#Product" className={styles.noUnderline}>
              <motion.button
                className={styles.orderBtn}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                Order ebook <i className="ri-shopping-bag-3-line"></i>
              </motion.button>
            </a>
          </div>

          {/* RIGHT GRID */}
          <div className={styles.benefitsGrid}>
            {benefitsItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.benefitItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className={styles.pictureBox}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.description}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

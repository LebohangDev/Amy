import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import styles from './Product.module.css';

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
            img: "Images/Benefits/Amy_1.png"
        },
        {
            title: "Health",
            description: "Balancing Fitness and Family (and What’s Working for Me!)",
            img: "Images/Benefits/Amy_2.png"
        },
        {
            title: "Motherhood",
            description: "Strengthening Your Body After Baby (and My Next Steps!)",
            img: "Images/Benefits/Amy_3.png"
        },
        {
            title: "Baby bump to Fit ",
            description: "Embracing Wellness (and What I’m Doing to Stay Healthy!)",
            img: "Images/Benefits/Amy_4.png"
        }
    ];

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const product = [
        {
            type: "ebook",
            title: "Food for Real Life",
            description: "Busy Avocado is about enjoying good food without overcomplicating it.",
            price: 19,
            currency: "usd",
            image: "https://busyavocado.com/Images/Ebook/Ebook_1.png",
            email: email,
            successUrl: "https://busyavocado.com/?payment=success",
            cancelUrl: "https://busyavocado.com/?payment=cancel",
        }
    ];

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setIsEmailValid(validateEmail(val));
    };

    async function handleCheckout(productPayload) {
        try {
            const res = await fetch('https://dianabackend.onrender.com/api/create-checkout-session', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productPayload),
            });

            const data = await res.json();
            window.location.href = data.url;

        } catch (e) {
            console.error("Payment session failed:", e);
        }
    }

    return (
        <div id="Product" className={styles.ProductContainer}>

            <div className={styles.productSection}>
                <div className={styles.backgroundImg}>
                    <img src="Images/Product/product_background.png" alt="" />
                </div>

                <div className={styles.productWrapper}>
                    <div className={styles.productLeft}>

                    </div>
                    <div className={styles.productRight}>
                        <div className={styles.starsContainer}>
                            <img src="Images/Stars/stars_1.svg" alt="" />
                        </div>
                        <div className={styles.title}>
                            <h2>Built</h2>
                            <h1>While</h1>
                            <h1>Raising</h1>
                        </div>
                        <div className={styles.tag}>
                            <h2>Ebook</h2>
                        </div>
                        <div className={styles.description}>
                            <p>Fitness & Real Life Guide for Moms</p>
                        </div>
                        <div className={styles.emailInput}>
                            <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                            <button disabled={!isEmailValid} onClick={() => handleCheckout(product[0])}>Get Started Now!</button>
                        </div>

                        <div className={styles.priceContainer}>
                            <div className={styles.price}>
                                <h1>Price</h1>
                                <p>10$</p>
                            </div>
                            <div className={styles.why}>
                                <h1>Why buy this ebook?</h1>
                                <i className="ri-arrow-down-circle-line"></i>

                            </div>
                        </div>

                    </div>
                </div>
            </div>



            {/* BENEFITS SECTION */}
            <div id="Benefits" ref={benefitsRef} className={styles.benefitsContainer}>
                <div className={styles.benefitsWrapper}>
                    {/* Left Side: Learn More */}
                    <div className={styles.benefitsLeft}>
                        <h2>What to expect?</h2>
                        <p>Helping you embrace your body, feel strong, and build healthy habits that align with your life as a new mom. Navigating the beautiful journey of motherhood with a clear and confident path.</p>
                        <div className={styles.bookStack}>
                            <img src="Images/Ebook/Ebook.png" alt="Ebook Stack" />
                        </div>
                        <a href="#Product">
                            <button className={styles.orderBtn}>Order ebook<i class="ri-shopping-bag-3-line"></i></button>

                        </a>
                    </div>

                    {/* Right Side: Grid */}
                    <div className={styles.benefitsGrid}>
                        {benefitsItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.benefitItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
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

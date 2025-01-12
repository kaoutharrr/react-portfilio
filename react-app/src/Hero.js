import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profileImage from "./assets/profile.jpg"; // Replace with your image path

const Hero = () => {
  return (
    <section className="hero">
      <motion.img
        src={profileImage}
        alt="Profile"
        className="profile-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.h1
        className="hero-title"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Kaouthar Kouaz <span>_ Fullstack Developer</span>
      </motion.h1>
    </section>
  );
};

export default Hero;

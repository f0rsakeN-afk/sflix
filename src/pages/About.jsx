import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const linkVariants = {
    hover: { scale: 1.05, color: "#60A5FA" }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 pt-72 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-xl text-gray-200" variants={itemVariants}>
        This project was made by{" "}
        <motion.a
          href="https://github.com/f0rsakeN-afk"
          className="text-blue-500 underline underline-offset-2"
          variants={linkVariants}
          whileHover="hover"
        >
          Naresh Rajbanshi
        </motion.a>
      </motion.h1>
      <motion.p className="text-lg text-gray-300" variants={itemVariants}>
        For any inquiries or feedback, please contact me via{" "}
        <motion.a
          href="mailto:nareshwork13gmail.com"
          className="text-blue-500 underline underline-offset-2"
          variants={linkVariants}
          whileHover="hover"
        >
          email
        </motion.a>
        .
      </motion.p>
      <motion.p className="text-lg text-gray-300" variants={itemVariants}>
        If you find this project useful, consider giving it a{" "}
        <motion.a
          href="https://github.com/f0rsakeN-afk/sflix"
          className="text-blue-500 underline underline-offset-2"
          variants={linkVariants}
          whileHover="hover"
        >
          star
        </motion.a>{" "}
        or{" "}
        <motion.a
          href="https://github.com/f0rsakeN-afk/sflix/fork"
          className="text-blue-500 underline underline-offset-2"
          variants={linkVariants}
          whileHover="hover"
        >
          fork
        </motion.a>{" "}
        on GitHub!
      </motion.p>
    </motion.div>
  );
};

export default About;
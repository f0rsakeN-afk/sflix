import React from 'react';
import { motion } from 'framer-motion';
import Trending from '../components/Trending';
import UpcomingMovie from '../components/UpcomingMovie';
import PlayingNow from '../components/PlayingNow';
import { pageVariants, pageTransition, staggerContainer, fadeInUp } from '../animations';

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="space-y-12">
        <motion.section variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Welcome to SFlix</h1>
          <p className="text-xl text-gray-300">Discover the latest and greatest in cinema</p>
        </motion.section>
        <motion.div variants={fadeInUp}><Trending /></motion.div>
        <motion.div variants={fadeInUp}><PlayingNow /></motion.div>
        <motion.div variants={fadeInUp}><UpcomingMovie /></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
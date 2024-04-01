import "./Intro.css";

import { motion } from "framer-motion";
import type { JSX } from "react";

import Page from "../../components/Page/Page";


const ANIMATE_VARIANTS = {
  initial: {
    x: -800,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const PERSONAL_DETAILS = {
  firstName: "Chris",
  lastName: "Polak",
  githubUsername: "cpolish",
};


export default function Intro(): JSX.Element {
  return (
    <Page id="intro">
      <motion.div
        className="text-container"
        variants={ANIMATE_VARIANTS}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={ANIMATE_VARIANTS}>
          Hi, I'm {PERSONAL_DETAILS.firstName}!
        </motion.h1>
        <motion.h2 variants={ANIMATE_VARIANTS}>
          I'm a software developer and student interested in exploring languages and 
          frameworks to develop cool projects!
        </motion.h2>
      </motion.div>
    </Page>
  );
}

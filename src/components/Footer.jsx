import React from 'react';
import styled from "styled-components";
import { BsInstagram } from 'react-icons/bs';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { footerTextAnimation, footerTextAnimationReverse, footerTextAnimationUp } from "../animation";

function Footer() {
  const [element, controls] = useScroll();
  return (
    <Foot ref={element}>
      <div className="footer-row footer-row-1">
        <motion.span
          variants={footerTextAnimation}
          animate={controls}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.8,
          }}
        >
          © {new Date().getFullYear()} Cris Création
        </motion.span>
        <motion.div
          className="footer__social__icons"
          variants={footerTextAnimationReverse}
          animate={controls}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.8,
          }}
        >
          <BsInstagram />
        </motion.div>
      </div>
      <motion.div 
        className="footer-row footer-row-2"
        variants={footerTextAnimationUp}
          animate={controls}
          transition={{
            delay: 0.10,
            type: "tween",
            duration: 1,
          }}
      >
        <ul className='footer-row-2-links'>
          <li><a href="#">plan du site</a></li> -
          <li><a href="#">contact</a></li> -
          <li><a href="#">protection des données</a></li> -
          <li><a href="#">mentions légales</a></li> 
        </ul>
      </motion.div>
    </Foot>
  );
}

const Foot = styled(motion.footer)`
background-color: var(--secondary-color-3);
color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem 10rem;
.footer__social__icons {
  display: flex;
  gap: 2rem;
  svg {
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      color: var(--secondary-color);
    }
  }
}
.footer-row {
  width: 100%;
}
.footer-row-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-row-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  &-links {
    display: flex;
    justify-content: center;
    gap: 0.5em;
    & li > a {
      transition: 200ms ease-in;
      color: inherit;
      :hover {
        color: var(--secondary-color-2);
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  padding: 1rem;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}
`;

export default Footer
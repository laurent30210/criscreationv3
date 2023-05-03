import React, {useState} from 'react';
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { navAnimation } from "../animation";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { MdClose } from "react-icons/md"; 

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();

  return (
    <Nav ref={element}
      variants={navAnimation}
      transition={{ delay: 0.1 }}
      animate={controls} 
      state={isNavOpen ? 1 : 0}
    >
      <div className="brand_container">
        <a href='#' className='brand'>
            CrisCréation
        </a>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={ () => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={ (e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
              />
          )}
        </div>      
      </div>
      <div className='links'>
        <Links>
          <li className='active'>
            <a href='#home'>Accueil</a>
          </li>
          <li>
            <a href='#about'>Le salon</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#galerie'>Galerie</a>
          </li>
          <li>
            <a href='#tarifs'>Tarifs</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a href='#home'>
              <FaInstagram className='icon-svg' />
            </a>
          </li>
        </Links>
      </div>
    </Nav>
  )
}

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0; 
  left: 0; right: 0;
  background-color: var(--first-color-1);
  display: flex;
  justify-content: space-between;
  color: var(--secondary-color-3);
  z-index: 1000000;
  padding: 1rem;

  .brand_container {
    margin: 0 1rem;
    .toggle {
      display: none;
    }
    a {
      color: var(--secondary-color-3);
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
    }
`;

const Links = styled.ul`
  display: flex;
  gap: 3rem;
  margin: 0 1rem;

  .active {
    a {
      border-bottom: 0.2rem solid var(--color-white);
    }
  }

  li {
    a {
      color: var(--secondary-color-3);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      text-transform: uppercase;
      white-space: nowrap;
      .icon-svg {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    text-align: center;
    height: 100%;
    justify-content: center;
  }
`;

export default Navbar
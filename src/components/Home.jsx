import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../animation";

import NavBar from './Navbar';

import pinkHair from '../assets/cheveux-roses-décoiffé.webp';
import longHair from '../assets/femme-cheveux-long-lissage.jpg';

const backgroundsImg = [pinkHair, longHair];

function Home() {
  return (
    <Section id='home'>
      <NavBar />
      <motion.div className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Cris Création</h1>
          </div>  
          <div className="subTitle">
            <p>
              At the Beauty Parlour, we believe in beauty with a conscience. 
              We have created a salon that offers the highest quality hair 
              services.
            </p>  
          </div>
        </div>  
      </motion.div>
      <motion.div className="info"
        variants={homeInfoAnimation}  
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >        
      <div className='grid'>
          <div className='col'>
            <strong>Horaires</strong>
            <p>aujourd'hui</p>
          </div>
          <div className='col'>
            <strong>Contact</strong>
            <address>
              <a href='tel:0404040404'>0404040404</a>
            </address>
          </div>
          <div className='col'>
            <strong>Adresse</strong>
            <address>
              <p>27 rue des bourgades</p>
              <p>30210 Sernhac</p>
            </address>
          </div>
        </div>
      </motion.div>
      {/*<OverLay className='absolute' />*/}
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  background: url(${backgroundsImg[Math.floor(Math.random()*backgroundsImg.length)]}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  .home{
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

const OverLay = styled.div`
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.29);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export default Home

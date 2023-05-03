import React from 'react';
import styled from "styled-components";
import { motion} from "framer-motion";
import NavBar from './Navbar';

import pinkHair from '../assets/cheveux-roses-décoiffé.webp';
import longHair from '../assets/femme-cheveux-long-lissage.jpg';

const backgroundsImg = [longHair];

function Home() {

  return (
    <Section id='home'>
      <NavBar />
      <div className="home">
        <div className="content">
          <div className='content-left'>
            <div className="title">
              <motion.h1>
                Cris Création
              </motion.h1>
            </div>  
            <div className="subTitle">
              <h2>Salon de coiffure mixte</h2>  
            </div>
          </div>
          <div className='content-right'>
          <div class="HeroMap--infos background-color-3">
            <h3 class="HeroMap--infos-title">Horaires</h3>
            <ul class="Schedule">
              <li class="Schedule--item HeroMap--schedule-item color-4-faded ">Lundi :&nbsp;
                <span>Fermé</span>
              </li>
              <li class="Schedule--item HeroMap--schedule-item color-4-faded ">Mardi&nbsp;:&nbsp;
                <span>
                  <span><time datetime="09h00">09h00</time> - <time datetime="19h00">19h00</time></span>
                </span>
              </li>
              <li class="Schedule--item HeroMap--schedule-item color-4-faded color-1">Mercredi&nbsp;:&nbsp;
                <span>
                  <span><time datetime="09h00">09h00</time> - <time datetime="13h00">13h00</time></span>
                </span>
              </li>
              <li class="Schedule--item HeroMap--schedule-item color-4-faded ">Jeudi&nbsp;:&nbsp;
                <span>
                  <span><time datetime="10h00">09h00</time> - <time datetime="19h00">12h00</time></span>
                </span>
              </li>
              <li class="Schedule--item HeroMap--schedule-item color-4-faded ">Vendredi&nbsp;:&nbsp;
                <span>
                  <span><time datetime="10h00">09h00</time> - <time datetime="19h00">18h00</time></span>
                </span>
              </li>
              <li class="Schedule--item HeroMap--schedule-item color-4-faded ">Samedi&nbsp;:&nbsp;
                <span>
                  <span><time datetime="10h00">10h00</time> - <time datetime="18h00">18h00</time></span>
                </span>
              </li>
              <li class="Schedule--item HeroMap--schedule-item color-4-faded ">Dimanche&nbsp;:&nbsp;
                <span>Fermé</span>
              </li>
            </ul>
            <h3 class="HeroMap--infos-title margin-top">Téléphone</h3>
            <address>
              <a href="tel:+33460000000" class="address-phone">
                <span class="">04 67 63 87 64</span>
              </a>
            </address>
            <button type="button" class="bookingButton">RÉSERVER</button>
            </div>
          </div>
        </div>  
      </div>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  background: url(${backgroundsImg[Math.floor(Math.random()*backgroundsImg.length)]}) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  border: 15px solid var(--first-color-1);

  .home{

    display: flex;
    justify-content: start;
    align-items: center;
    height: calc(100vh - 1rem);
    &::after {
      position: absolute;
      bottom: 0;
      content: '';
      width: 100%;
      height: 40%;
      background: linear-gradient(to bottom,#0000, var(--first-color-1));
      opacity: .9;
    }
    .content {
      display: flex;
      justify-content-center: center;
      align-items-content: center;
      flex-wrap: wrap;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      &-left {
        .title {
          h1 {
            font-size: 5rem;
            line-height: 5.3rem;
          }
        }
        .subTitle {
          h2 {
            font-size: 2em;
          }
        }
      }
      &-right {
        margin-left: 9rem;
        border: 6px solid #fff;
        padding: 2rem;
        z-index: 1000;
        .bookingButton {
          padding: 8px 16px;
          width: 100%;
          outline: 0;
          border: 0;
          border-radius: 4px;
          color: #fff;
          background-color: #ff6392;
          margin-top: 1rem;
        }
        .address-phone {
          color: #fff;
        }
      }
      
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color-3);
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

import React from 'react';
import styled from "styled-components";
import bg from "../assets/plan-contreBas-coiffure-bordeaux-préparation.jpg";
import pinkHair from '../assets/cheveux-roses-décoiffé.webp';
import longHair from '../assets/femme-cheveux-long-lissage.jpg';

import play from "../assets/play.png";
import Title from './Title';
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "../animation";

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Coiffure",
      text: "Nous sommes fiers de fournir un service attentionné et personnalisé pour nos clients de mariage. Nous somme présent pour vous offrir une expérience de coiffure de mariage agréable et relaxante, de sorte que vous pouvez vous détendre et profiter de cette journée spéciale en sachant que vos cheveux sont entre de bonnes mains.",
      image: bg,
    },
    {
      type: "Coloration",
      text: "Nous sommes fiers de fournir un service attentionné et personnalisé pour nos clients de mariage. Nous somme présent pour vous offrir une expérience de coiffure de mariage agréable et relaxante, de sorte que vous pouvez vous détendre et profiter de cette journée spéciale en sachant que vos cheveux sont entre de bonnes mains.",
      image: pinkHair,
    },
    {
      type: "Mariage",
      text: "Nous sommes fiers de fournir un service attentionné et personnalisé pour nos clients de mariage. Nous somme présent pour vous offrir une expérience de coiffure de mariage agréable et relaxante, de sorte que vous pouvez vous détendre et profiter de cette journée spéciale en sachant que vos cheveux sont entre de bonnes mains.",
      image: bg,
    },
    
  ];
  return <Section id="services" ref={element}>
    <div className="services__title">
        <h2>Services</h2>
        <p>Découvrez nos propositions</p>
      </div>
    <div className="services">
        {data.map(({type,text,image},index) => {
            return (
              <motion.div className="services__service"
              key={index}
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              >
                  <div className="services__service__image">
                  </div>
                  <div className="services__service__title">
                    <h2>{type}</h2>
                  </div>
                  <p className="services__service__description">{text}</p>
                  <img src={play} alt="Readmore" />
              </motion.div>
            )
          })}
    </div>
  </Section>
}

const Section = styled.section`
min-height: 100vh;
.services {
  display: grid;
  grid-template-columns: repeat(3, 18rem);
  align-items: center;
  height: 100%;
  width: 1000px;
  margin: 0 auto;
  margin-top: 10rem;
  gap: 5rem;
  &__title {
    margin: 6rem 10rem;
    p {
      color: var(--secondary-color-2);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: var(--primary-color-2);
      font-size: 2rem;
    }
  }
  &__service {
    :hover {
      transform: translateY(1rem);
    }
    position: relative;
    padding: 2rem 1rem;
    height: 100%;
    width: 100%;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    :first-child {
    background-image: url(${longHair});
    }
    :nth-child(2) {
    background-image: url(${pinkHair});
    }
    &__title {
      h2 {
        font-size: 3rem;
        line-height: 2.5rem;
        margin: 1rem 0 5rem 0;
        color: var(--color-white);
      }
    }
    &__description {
      color: var(--color-white);
      margin-bottom: 2rem;
      background: #0006;
      padding: .5rem;
      border-radius: 0.3rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  .services {
    margin: 2rem 0;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
}
`;

export default Services
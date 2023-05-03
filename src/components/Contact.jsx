import React from 'react';
import styled from "styled-components";
import Title from './Title';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { contactAnimation } from "../animation";

import { TbGps } from 'react-icons/tb';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhoneFill } from 'react-icons/bs';
import { TbAddressBook } from 'react-icons/tb';
import { IoMdOpen  } from 'react-icons/io';

function Contact() {
  const [element, controls] = useScroll();
  return (
    <Section id="contact" ref={element}>
      <Title value="contact" />
      <motion.div className="contact"
        variants={contactAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="contact__title">
          <h2>Pour nous contacter</h2>
          <p>Rien de plus simple !</p>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">

            <p>
              Envie de nous découvrir ou bien de parler de vos envies ?
            </p>
            <a className='btn' href='#' target={"_blank"}>
              RENDEZ-VOUS EN LIGNE
              <IoMdOpen size={10} className="newtab" title='nouvel onglet' />

            </a>
            <div className='contact__data__description__contact'>
              <p>
                <TbAddressBook size={20} /> 27 rue des bourgades <br/> 30210 Sernhac
              </p>
              <p>
                <BsPhoneFill  size={20} /> <a href="tel:0466590072">04 66 59 00 72</a>
              </p>
              <p>
                <HiOutlineMail size={20}/> <a href="mailto:cris.creation@yahoo.fr">cris.creation@yahoo.fr</a>
              </p>
              <p>
                <TbGps  size={20} /> <a href="https://www.google.com/maps/dir//Cris'Creation,+27+Rue+des+Bourgades,+30210+Sernhac" target={'_blank'}>Nous rejoindre</a>
                <IoMdOpen size={10} className="newtab" title='nouvel onglet' />
              </p>
            </div>
          </div>
          <div className="contact__data__maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11497.328463066162!2d4.5503982!3d43.9110977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5cf429a7fa2c3%3A0x52df522cd281b0a7!2sCris&#39;Creation!5e0!3m2!1sfr!2sfr!4v1679760586003!5m2!1sfr!2sfr" 
                    width="600" 
                    height="450" 
                    allowFullScreen="" loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
min-height: 90vh;
.contact {
  color: var(--primary-color-2);
  max-width: 950px;
  margin: auto;
  a {
    color: inherit;
  }
  &__title {
    margin: 6rem 0 2rem 0;
    p {
      text-transform: uppercase;
      color: var(--primary-color-2);
    }
    h2 {
      font-size: 2rem;
      color: var(--secondary-color-2);
    }
  }
  &__data {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    &__description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h4 {
        font-size: 1.5rem;
      }
      p {
        text-align: justify;
        margin-top: 20px;
      }
      &__contact {
        p {
          display: flex;
          align-items: center;
          color: var(--primary-color-3);
          svg {
            color: var(--secondary-color-2);
            margin-right: 0.8rem;
          }
          a {
            transition: 300ms;
          }
          a:hover {
            color: var(--secondary-color-2);
          }
        }
      }
      .btn {
        border: 1px solid #ccc;
        max-width: 230px;
        height: 40px;
        color: #fff;
        padding: 5px 10px;
        font-weight: bold;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        outline: none;
        overflow: hidden;
        border-radius: 5px;
        border: none;
        background-color: #ff6392;
        line-height: 30px;
        font-size: clamp(.8rem, 1vw, 1rem);
        :hover {
          transition: 500ms;
          background-color: #ec396f;
        } 
      }
    }
    &__maps {
      iframe {
        border: 0 solid transparent;
      }
    }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .contact {
    margin: 1rem;
    padding: 0 1rem;
    &__title {
      margin: 0;
      text-align: center;
      p {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
    &__data {
      grid-template-columns: 1fr;
      margin: 0;
      p {
        text-align: left;
      }
      &__maps {

      }
    }
  }
}
`;

export default Contact
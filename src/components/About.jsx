import React from 'react'
import styled from "styled-components";
import portfolio3 from "../assets/plan-contreBas-coiffure-bordeaux-préparation.jpg";
import portfolio4 from "../assets/salon-rincage-shampoing.jpg";

const Section = styled.section`
  position: relative;
  height: 100vh;
  padding: 0 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
    & article {
      width: 30%;
      line-height: 2;
      font-size: 1.1em;
    }
    .image {
        position: absolute;
        max-width: 350px;
        object-fit: cover;
        top: 50%;
        transform: translateY(-50%);
          &-left {
          left: 2rem;
        }
        &-right {
          right: 3rem;
        }
      }
    }
`;
function About() {
  return (
    <Section>
      <img className='image image-left' src={portfolio3} alt="Load More" />
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </article>
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </article>
      <img className='image-right image' src={portfolio4} alt="Load More" />

    </Section>
  )
}

export default About
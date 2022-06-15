import React from 'react';
import phoneImg from '../images/phone.svg';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>

          <button className='btn btn-hero-main'>
            Start now <RiArrowRightSLine className='arrow-icon' />
          </button>

          <button className='btn btn-contact-sales'>Contact sales</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone image' />
        </article>
      </div>
    </section>
  );
};

export default Hero;

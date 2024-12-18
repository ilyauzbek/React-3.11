import React, { useEffect } from 'react';
import './Hero.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section" data-aos="fade-up">
      <div className="container" data-aos="fade-right">
        <div className="hero__wrapper">

          <div className="hero__find" data-aos="fade-up" data-aos-delay="200">
            <h1>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Browse through our diverse range of meticulously crafted garments, designed <br />
              to bring out your individuality and cater to your sense of style.
            </p>
            <button data-aos="zoom-in" data-aos-delay="600">Shop Now</button>

            <div className="hero__plus" data-aos="fade-up" data-aos-delay="800">
              <div className="hero__200" data-aos="flip-left" data-aos-delay="1000">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>

              <div className="hero__200" data-aos="flip-left" data-aos-delay="1200">
                <h3>2,000+</h3>
                <p>High-Quality Products</p>
              </div>

              <div className="hero__200" data-aos="flip-left" data-aos-delay="1400">
                <h3>30,000+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>

          <img src="/public/hero-img.png" alt="Hero" data-aos="zoom-in" data-aos-delay="1600" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

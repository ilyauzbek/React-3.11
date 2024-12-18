import React, { useEffect } from 'react';
import './Brands.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brands = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="brands__wrapper" data-aos="fade-up">
      <img src="/brands-1 (2).svg" alt="" data-aos="fade-right" data-aos-delay="200" />
      <img src="/brands-2 (2).svg" alt="" data-aos="fade-up" data-aos-delay="400" />
      <img src="/brands-3 (2).svg" alt="" data-aos="fade-down" data-aos-delay="600" />
      <img src="/brands-4 (2).svg" alt="" data-aos="fade-left" data-aos-delay="800" />
      <img src="/brands-5 (2).svg" alt="" data-aos="zoom-in" data-aos-delay="1000" />
    </div>
  );
}

export default Brands;

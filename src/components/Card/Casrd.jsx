import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Card.module.scss';

const Casrd = ({ image = '', name = 'Soon...', rate = '0', price = 'Нету в наличии' }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={s.card} data-aos="flip-up">
      <img src={image} alt={name} className={s.card__image} />
      <h3 className={s.text}>
        <h3 data-aos="fade-up" data-aos-delay="200">{name}</h3>
      </h3>
      <b data-aos="fade-up" data-aos-delay="400">{price}</b>
    </div>
  );
}

export default Casrd;

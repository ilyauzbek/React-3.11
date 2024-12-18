import React, { useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header className="header" data-aos="fade-down">
      <nav className="nav">
        <Link to="/" className="logo" data-aos="fade-right">
          SHOP.CO
        </Link>

        <div className="menu" data-aos="fade-down">
          <Link>Shop</Link>
          <Link>On Sale</Link>
          <Link>New Arrivals</Link>
          <Link>Brands</Link>
        </div>

        <input
          className="search"
          type="text"
          placeholder="Search for products..."
          data-aos="zoom-in"
        />

        <div className="box" data-aos="fade-left">
          <img src="/icon-1 (4).svg" alt="" />
          <img src="/icon-2 (4).svg" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;

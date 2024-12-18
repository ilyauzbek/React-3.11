import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import s from "./Product.module.scss";

const Product = ({ product }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Инициализация AOS
  }, []);

  return (
    <>
      <section className={s.Productwrap}>
        <div className="container">
          <div className={s.wrap}>
            {/* Анимация для изображений */}
            <div className={s.images} data-aos="fade-right">
              <div>
                <img src={product.image} alt="" data-aos="fade-up" data-aos-delay="200" />
                <img src={product.image} alt="" data-aos="fade-up" data-aos-delay="400" />
                <img src={product.image} alt="" data-aos="fade-up" data-aos-delay="600" />
              </div>
              <img src={product.image} alt="" data-aos="zoom-in" data-aos-delay="800" />
            </div>

            {/* Анимация для бокового блока */}
            <div className={s.box} data-aos="fade-left">
              <div>
                <h2 data-aos="fade-down" data-aos-delay="200">{product.name}</h2>
                <h3 data-aos="fade-down" data-aos-delay="300">⭐⭐⭐⭐ 4.5</h3>
                <div className={s.price} data-aos="fade-down" data-aos-delay="400">
                  <b>{product.price} Сум</b>
                  <s>{Math.floor(product.price * 1.1)} Сум</s>
                </div>
                <p className={s.text} data-aos="fade-down" data-aos-delay="500">
                  This graphic t-shirt which is perfect for any occasion. Crafted
                  from a soft and breathable fabric, it offers superior comfort
                  and style.
                </p>
              </div>

              {/* Цвета */}
              <div className={s.select} data-aos="flip-up" data-aos-delay="600">
                <p>Select Colors</p>
                <div className={s.colors}>
                  <div className={s.div1}>
                    <img src="/Frame(1).png" alt="" />
                  </div>
                  <div className={s.div2}></div>
                  <div className={s.div3}></div>
                </div>
              </div>

              {/* Размеры */}
              <div data-aos="fade-up" data-aos-delay="700">
                <p className={s.size}>Choose Size</p>
                <div className={s.btns}>
                  <button>Small</button>
                  <button>Medium</button>
                  <button>Large</button>
                  <button>X-Large</button>
                </div>
              </div>

              {/* Добавление в корзину */}
              <div className={s.cart} data-aos="fade-up" data-aos-delay="800">
                <div className={s.count}>
                  <button className={s.btn1}>-</button>
                  <p>1</p>
                  <button className={s.btn2}>+</button>
                </div>
                <button className={s.add}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

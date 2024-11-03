import React from "react";
import "./Logos.scss";

const Logos = () => {
  return (
    <section className="companies">
      <div className="container">
        <div className="companies__logos1">
          <p class="companies__trusted">Trusted by 4,000+ companies</p>

          <div className="companies__logos2">
            <img src="/public/Company logo 1.png" alt="" />
            <img src="/public/Company logo 2.png" alt="" />
            <img src="/public/Company logo 3.png" alt="" />
            <img src="/public/Company logo 4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;

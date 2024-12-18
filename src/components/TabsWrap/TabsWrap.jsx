import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReviewsWrap from "../ReviewsWrap/ReviewsWrap";
import s from "./TabWrap.module.scss";

const TabsWrap = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={s.tabswrap}>
      <Tabs>
        {/* Tab List */}
        <TabList data-aos="fade-up">
          <Tab data-aos="fade-down" data-aos-delay="200">
            Product Details
          </Tab>
          <Tab data-aos="fade-down" data-aos-delay="400">
            Rating & Reviews
          </Tab>
          <Tab data-aos="fade-down" data-aos-delay="600">
            FAQs
          </Tab>
        </TabList>

        {/* Product Details */}
        <TabPanel>
          <div className={s.list} data-aos="fade-right">
            <ul>
              <li>Свободная модель оверсайз</li>
              <li>Футболка унисекс</li>
              <li>XL размер 54-58: На рост 180-195, вес до 130 кг</li>
              <li>M размер 48-50: На рост 155-165, вес до 75 кг</li>
              <li>L размер 50-54: На рост 165-180, вес до 100 кг</li>
            </ul>
          </div>
        </TabPanel>

        {/* Rating & Reviews */}
        <TabPanel>
          <div data-aos="fade-up" data-aos-delay="200">
            <ReviewsWrap />
          </div>
        </TabPanel>

        {/* FAQs */}
        <TabPanel>
          <div className={s.faqs} data-aos="zoom-in" data-aos-delay="300">
            <h3>Frequently Asked Questions</h3>
            <p>1. Какой материал у футболки? - Хлопок 100%.</p>
            <p>2. Как выбрать размер? - Смотрите таблицу размеров.</p>
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default TabsWrap;

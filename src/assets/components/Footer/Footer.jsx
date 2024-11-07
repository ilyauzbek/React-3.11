import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>

    <section className="footer">
        <div className="container">
            <div className="footer__wrapper">
            <div className="footer__contacts">
                <div className="footer__agency">
                    <h5>Digital Agency</h5>
                    <p>Building digital products, <br/>
                    brands & experience</p>
                </div>

                <div className="footer__resurs">
                    <h5>Resources</h5>
                    <a href="">Guides</a>
                    <a href="">Blog</a>
                    <a href="">Cuistomer Stories</a>
                    <a href="">Glossery</a>
                </div>

                <div className="footer__company">
                    <h5>Company</h5>
                    <a href="">About Us</a>
                    <a href="">Careers</a>
                    <a href="">Partners</a>
                    <a href="">Contact Us</a>
                </div>

                <div className="footer__social">
                    <h5>Social Media</h5>
                    <a href="">LinkedIn</a>
                    <a href="">FAcebook</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                </div>

                </div>

           
            

            <div className="footer__text">
            <a href="">© Matheus. Todos os direitos reservados</a>
            </div>

            </div>

            
        </div>
    </section>
    </>
  )
}

export default Footer
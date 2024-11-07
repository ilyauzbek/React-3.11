import React from 'react'
import './Card.scss'

const Cards = () => {
  return (
   <>
   <section className="cards">
    <div className="container">

    <h6>TESTIMONIALS</h6>


   <div className="cards__text">
   <h1>Read What Other <br/> have  to Say</h1>
   </div>


    <div className="cards__boxes">
        <div className="cards__box">
            <img src="/Cards man 1.png" alt="" />

            <h2>Andrew Rathore</h2>


            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nunc ullamcorper <br/> scelerisque mi, in malesuada felis <br/> malesuada vel. </p>
        </div>
   

    
        <div className="cards__box">
            <img src="/Cards man 2.png" alt="" />

            <h2>Vera Duncan</h2>


            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nunc ullamcorper <br/> scelerisque mi, in malesuada felis <br/> malesuada vel. </p>
        </div>
   

    
        <div className="cards__box">
            <img src="/Cards man 3.png" alt="" />

            <h2>Mark Smith</h2>


            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nunc ullamcorper <br/> scelerisque mi, in malesuada felis <br/> malesuada vel. </p>
        </div>

        </div>


    </div>
   </section>
   </>
  )
}

export default Cards
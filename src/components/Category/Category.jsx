import React from 'react'
import s from './Category.module.scss'


import Casrd from '../Card/Casrd'
import Products from '/public/products.json'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
        

            <div className={s.wrapper}>

                {Products.slice(0.4).map(card => (
                   <Link  key={card.id} to={`/product/${card.id}`}  className={`${s.link}`}>
                    <Casrd  image={card.image} name={card.name} price={card.price}/>
                   </Link>
                ))}
            </div>
        
    </>
  )
}

export default Category
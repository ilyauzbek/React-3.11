import React from 'react'
import { useParams } from 'react-router-dom'

import ProductWrap from '../components/ProductWrap/ProductWrap'

import Products from '/public/products.json'
import TabsWrap from '../components/TabsWrap/TabsWrap'






const SinglePage = () => {

    const { id } = useParams()

    const product = Products.find(item => item.id === Number(id))

    
  return (
    <>
    <ProductWrap product={product}/>
    <TabsWrap/> 
     </>
  )
}

export default SinglePage
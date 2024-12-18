import React from 'react'
import Filters from '../components/Filters/Filters'
import ProductList from '../components/ProductList/ProductList'
import ProductCard from '../components/ProductCard/ProductCard'

const CategoryPage = () => {
  return (
    <>
    <Filters/>
    
    <ProductList/>
    </>
  )
}

export default CategoryPage
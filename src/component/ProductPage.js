import React, { useState, useEffect } from 'react';
import Product from './Product/Product';
import productServices from '../services';
import '../App.css';
import ContentProduct from '../component/ContentProduct/ContentProduct'


function ProductPage() {
  const [products, setProducts] = useState([])




  //getAll
  useEffect(() => {
    productServices
      .getAll()
      .then(response => setProducts(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <Product products={products} />
     
    </div>
  );
}

export default ProductPage;




import React, { Component } from 'react'
import Product from './Product/Product2';
import '../App.css';
import {DataContext} from './ShoppingCart/Context'
export default class ProductPage2 extends Component {
  static contextType = DataContext;
  render() {
    const {products} = this.context;
    return (
      <div>
      <Product products={products} />     
    </div>
    )
  }
}

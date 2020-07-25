import React from 'react';
import ItemProduct from '../ItemProduct2';
import { Link } from 'react-router-dom'
import './product.css'
function Product({ products }) {
    return (
        <section className="productslist">
             <div className=" banner-productss product-list-whey">
                    <div class="slider-text">
                        <div class="content-text wow bounceInUp" data-wow-delay="0.1s">
                            <h2>WHEY HOME !</h2>

                            <Link to="/" className="btn-primary wow bounceInLeft" data-wow-delay="0.2s">
                                Trang Chủ
                            </Link>
                        </div>
                    </div>
                </div>
            <div className="productslist-center">
                
                {
                    products.map(product =>
                        <ItemProduct
                            key={product.id}
                            product={product}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            stock={product.stock}


                        />
                    )
                }
            </div>
        </section>

    );
}

export default Product;
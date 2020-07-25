import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
// import '../css/Products.css';
// import products from '../../ContentProduct/'
import '../../ContentProduct/SingleProduct.css';
import ProductRelated from '../../ContentProduct/ProductRelated'


export class Products extends Component {

    static contextType = DataContext;



    render() {
        var dem =1;
       const {products,addCart} = this.context;
    //    console.log(products)
        return (
            
            <div>
                  <div className="banner-productss banner-product-hero1">
                    <div class="slider-text">
                        <div class="content-text wow bounceInUp" data-wow-delay="0.1s">
                            <h2>WHEY HOME!</h2>

                            <Link to="/ProductPage2" className="btn-primary wow bounceInLeft" data-wow-delay="0.2s">
                                Trang Sản Phẩm
                            </Link>
                        </div>
                    </div>
                </div>
                  {
                    products.map(item => {
                    
                        if (item.id == parseInt(this.props.match.params.id)) {//neu value.id trung voi this.props.math.param.id,== la dau so sanh,=== la dong nhat
                       
                            return (
                                <div className="jumbotron jumbotron-fluid" key={item.id}>
                                    <div className="container container-detail">
                                        <div className="row row2">
                                            <div className="col-md-6">
                                                <img src={item.image} alt="single product" className="img-fluid width100 wow bounceInLeft" />
                                                <div className="size wow rollIn" data-wow-delay="0.2s">
                                                    {item.size}g
                                        </div>
                                            </div>
                                            <div className="col-md-6 mt10">
                                                <p className="lead leadd wow bounceInRight" data-wow-delay="0.2s">{item.name}</p>
                                                <hr className="my-2" />
                                                {/* {value.contentp} */}
                                                <div>
                                                    <p className="card-textp2 wow bounceInRight" data-wow-delay="0.4s">{item.description} </p>
                                                    <div className="product_price wow bounceInRight" data-wow-delay="0.6s"> ${item.price}</div>
                                                </div>
                                                <p className="lead">
                                            
                                        
                                         <Link to="/cart" className="cart" onClick={() => addCart(item.id)}>
                                         Mua ngay
                                         </Link>
                                                </p>
                                                <p className="delivery_hotline wow bounceInRight" data-wow-delay="1s">Gọi giao hàng tận nơi <a href="tel:0333765265" title="Hotline: 0333765265">0333765265</a></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="container-fulid">
                                        <div className="row row3 row3-product">
                                            <div className="col-xl-8 mx-auto">
                                                <div className="content-title content-title2">
                                                    <h3 className="wow bounceInDown">Tốt cho phát triển cơ thể</h3>
                                                    <p className="wow bounceInUp" data-wow-delay="0.4s">{item.extras}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="card border-primary">
                                            <img className="card-img-top" src="holder.js/100px180/" alt="" />
                                            <div className="card-body wow bounceInUp">
                                                <h4 className="card-title text-center ">BẠN CÓ THỂ THÍCH</h4>

                                            </div>
                                        </div>
                                        <div className="row mt3 wow bounceInUp" data-wow-delay="0.3s" >
                                            <section className="featured-products">
                                                {/* <Title title="featured products"/> */}
                                                <div className="featured-products-center">
                                                    {

                                                        products.map(item => {
                                                           
                                                            if (item.id != this.props.match.params.id) {
                                                                if (dem <= 4) { //bien dem khai bao ben tren cung, co 4 sp tuong ung
                                                                    dem++;
                                                                    return (
                                                                        <ProductRelated key={item.id}
                                                                            id={item.id}
                                                                            name={item.name}
                                                                            price={item.price}
                                                                            contentp={item.contentp}
                                                                            image={item.image} />
                                                                    )
                                                                }
                                                            }
                                                            return;
                                                        })

                                                    }
                                                </div>
                                            </section>

                                        </div>
                                        {/* <div className="outer-container wow bounceInUp" /> */}

                                    </div>
                                </div>
                            )
                        }
                        return;
                    })
                }
            </div>
        )
    }
}

export default Products

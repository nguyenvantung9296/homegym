
import React, { Component } from 'react'
import productServices from '../../services';
import products from './db.json'
import { Link } from 'react-router-dom'
import './SingleProduct.css';
import DulieuProduct from './db.json'
import ProductRelated from './ProductRelated'

export default class ContentProduct extends Component {
    render() {
        var dem =1;
        return (
            <div>
                <div className=" banner-productss banner-products-content">
                    <div class="slider-text">
                        <div class="content-text wow bounceInUp" data-wow-delay="0.1s">
                            <h2><span>KHUYẾN MÃI</span> THÁNG 6 NÀY !</h2>

                            <Link to="/" className="btn-primary wow bounceInLeft" data-wow-delay="0.2s">
                                Trang Chủ
                            </Link>
                        </div>
                    </div>
                </div>
                {
                    products.map((value, key) => {
                        console.log(products)
                        if (value.id === parseInt(this.props.match.params.id)) {//neu value.id trung voi this.props.math.param.id,== la dau so sanh,=== la dong nhat
                            console.log(products)
                            return (
                                <div className="jumbotron jumbotron-fluid" key={key}>
                                    <div className="container container-detail">
                                        <div className="row row2">
                                            <div className="col-md-6">
                                                <img src={value.image} alt="single product" className="img-fluid width100 wow bounceInLeft" />
                                                <div className="size wow rollIn" data-wow-delay="0.2s">
                                                    {value.size}g
                                        </div>
                                            </div>
                                            <div className="col-md-6 mt10">
                                                <p className="lead leadd wow bounceInRight" data-wow-delay="0.2s">{value.name}</p>
                                                <hr className="my-2" />
                                                {/* {value.contentp} */}
                                                <div>
                                                    <p className="card-textp2 wow bounceInRight" data-wow-delay="0.4s">{value.description} </p>
                                                    <div className="product_price wow bounceInRight" data-wow-delay="0.6s"> ${value.price}</div>
                                                </div>
                                                <p className="lead">


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
                                                    <p className="wow bounceInUp" data-wow-delay="0.4s">{value.extras}</p>
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

                                                        DulieuProduct.map((value, key) => {
                                                            console.log(key)
                                                            if (value.id != this.props.match.params.id) {
                                                                if (dem <= 4) { //bien dem khai bao ben tren cung, co 4 sp tuong ung
                                                                    dem++;
                                                                    return (
                                                                        <ProductRelated key={key}
                                                                            id={value.id}
                                                                            name={value.name}
                                                                            price={value.price}
                                                                            contentp={value.contentp}
                                                                            image={value.image} />
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


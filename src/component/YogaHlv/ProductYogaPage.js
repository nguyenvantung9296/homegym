import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../YogaPage/yoga.css';
import DulieuYoga from './data-Yoga.json';
import ProductYogaItem2 from './ProductYogaItem2'
export default class ProductYogaPage extends Component {
    render() {
        var dem = 1;
        return (
            <div>
                <div className="banner-Yoga banner-PT-yoga">
                    <div class="slider-text">
                        <div class="content-text content-text-boxing wow bounceInUp" data-wow-delay="0.1s">
                            <h4 className="title-yoga">HLV YOGA</h4>
                            <div></div>
                            <Link to="/Yoga" className="btn-primary">
                                Trang Chủ
                                </Link>
                        </div>
                    </div>
                </div>
                {
                    DulieuYoga.map((value, key) => {
                        if (value.id === parseInt(this.props.match.params.id)) {//neu value.id trung voi this.props.math.param.id,== la dau so sanh,=== la dong nhat
                            return (
                                <div className="" key={key}>
                                    <section className="yoga-home yoga-page">
                                        <div className="content-container">
                                            <div className="yoga-home-container">
                                                <div className="sec1-yoga">
                                                    <img src={value.image} />
                                                </div>
                                                <div className="sec2-yoga">
                                                    <div className="content-sec2-yoga">
                                                        <h1 className="title-sec2-yoga">
                                                            {value.name}<br/>
                                            
                    </h1>
                    <p className="hlv-cn">HLV cá nhân</p>
                                                        <div className="p-content-sec2">
                                                            {value.p}
                                                        </div>


                                                        <a className="wow slideInLeft button-yogo-add" data-wow-delay="0.8s" href data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'slideInLeft' }}>Đăng Ký</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                      


                                    <div className="container container-hlv">
                                        <div className="row row01">
                                            <div className="col-md-12">
                                                <div className="content-title-row01">
                                                    <h3>HLV Liên Quan</h3>
                                                    <p>Vì sức khỏe và sắc đẹp của khách hàng !</p>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="row">
                                            <div className="col-md-12 mt-3 mb-3">
                                                <div className="card-deck">
                                                    {
                                                        DulieuYoga.map((value, key) => {
                                                            console.log(key)
                                                            if (value.id != this.props.match.params.id) {
                                                                if (dem <= 4) { //bien dem khai bao ben tren cung, co 4 sp tuong ung
                                                                    dem++;
                                                                    return (
                                                                        <ProductYogaItem2 key={key}
                                                                           hlvId={value.id}
                                                                            name={value.name}
                                                                            price={value.price}
                                                                            contentp={value.contentp}
                                                                            image={value.image} />
                                                                    )
                                                                }
                                                            }
                                                            return ;
                                                        })
                                                    }

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            )
                        }
                        return;
                    })
                }


                
            </div>
        );
    }
}

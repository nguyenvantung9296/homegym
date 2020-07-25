import React, { Component } from 'react'
import DulieuPT from './data-Pt.json';
import { Link } from 'react-router-dom';
import ProductPtItemClick from './ProductPtItemClick'
import './Promotion.css'
export default class ProductPtDetail extends Component {
    render() {
        let dem =1;
        return (
            <div>
                <div className="banner-Yoga">
                    <div class="slider-text">
                        <div class="content-text content-text-boxing wow bounceInUp" data-wow-delay="0.1s">
                            <h4 className="title-yoga">HLV GYMHOME</h4>
                            <div></div>
                            <Link to="/" className="btn-primary">
                                Trang Chủ
                                </Link>
                        </div>
                    </div>
                </div>
                {
                    DulieuPT.map((value, key) => {
                        if (value.id === parseInt(this.props.match.params.id)) {//neu value.id trung voi this.props.math.param.id,== la dau so sanh,=== la dong nhat
                            return (
                                <div className="jumbotron jumbotron-fluid jumbotron-Click" key={key}>
                                    <div className="container container-detail">
                                        <div className="row row2">
                                            <div className="col-sm-4 col-sm-4s">
                                                <img src={value.image} alt="" className="img-fluid width100" />
                                            </div>
                                            <div className="col-sm-8 mt10">
                                                <p className="lead add">{value.name}</p>

                                                {/* {value.contentp} */}
                                                <div>
                                                    <p className="card-textp2">{value.p}</p>

                                                </div>

                                                <p className="delivery_hotline">Liên hệ đặt lịch <a href="tel:0333765265" title="Hotline: 0333765265">0333765265</a></p>
                                                <hr className="my-2" />
                                                <h5>Hình ảnh học viên !</h5>
                                                <div className="image-before-after">
                                                    <div className="image-after image-after1">
                                                        <img src={value.image1} alt="ảnh khách sử dụng dịch vụ" />
                                                    </div>
                                                    <div className="image-after image-after2">
                                                        <img src={value.image2} alt="ảnh khách sử dụng dịch vụ" />
                                                    </div>
                                                    <div className="image-after image-after3">
                                                        <img src={value.image3} alt="ảnh khách sử dụng dịch vụ" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="container-fulid">
                                        <div className="row row3 row3-product">
                                            <div className="col-xl-8 mx-auto">
                                                <div className="content-title content-title2">
                                                    <h3 className="wow bounceInDown">Phong Cách Làm việc</h3>
                                                    <p className="wow bounceInUp" data-wow-delay="0.4s">{value.contentp}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
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
                                                        DulieuPT.map((value, key) => {
                                                            console.log(key)
                                                            if (value.id != this.props.match.params.id) {
                                                                if (dem <= 4) { //bien dem khai bao ben tren cung, co 4 sp tuong ung
                                                                    dem++;
                                                                    return (
                                                                        <ProductPtItemClick key={key}
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
        )
    }
}

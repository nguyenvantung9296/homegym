import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Promotion.css'
import {WOW} from 'wowjs';
import DulieuPT from './data-Pt.json';
import ProductPT from './ProductPtItem';
export default class PromotionPage extends Component {
  componentDidMount() {
		const wow = new WOW({
		  offset: 100,
		  mobile: false, 
		  live: true 
		})

		wow.init();
	}
  render() {
    return (
      <div>
        <div className="banner-Promotion">
          <div class="slider-text">
            <div class="content-text wow bounceInUp" data-wow-delay="0.1s">
              <h2><span>KHUYẾN MÃI</span> THÁNG 6 NÀY !</h2>
              
              <Link to="/" className="btn-primary">
                    Trang Chủ
                    </Link>
            </div>
          </div>
        </div>
  
  
  
        <div className="gym-home wow bounceInDown">
          <div className="h2">
            <h2><span>GYM</span>HOME</h2>
          </div>
          <p>Đăng kí ngay để thay đổi bản thân một cách hoàn thiện nhất !</p>
        </div>
        <section className="section-1">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-margintop wow bounceInUp">
                <div className="content-coll">
                  <div className="price-cover">
                    <div className="price">
                      <span>$</span>
                        50
                      </div>
                    <div className="month">
                      1 Tháng
                      </div>
                  </div>
                  <div className="content-p">
                    <p>Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolortin lorem ut.</p>
                  </div>
                  <div className="button button-center">
                    <a href>Xem Thêm</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 wow bounceInUp" data-wow-delay="0.2s">
                <div className="content-coll">
                  <div className="price-cover">
                    <div className="price">
                      <span>$</span>
                        250
                      </div>
                    <div className="month">
                      6 Tháng
                      </div>
                  </div>
                  <div className="content-p">
                    <p>Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolortin lorem ut.</p>
                  </div>
                  <div className="button button-center">
                    <a href>Xem Thêm</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-margintop wow bounceInUp">
                <div className="content-coll">
                  <div className="price-cover">
                    <div className="price">
                      <span>$</span>
                        400
                      </div>
                    <div className="month">
                      1 Năm
                      </div>
                  </div>
                  <div className="content-p">
                    <p>Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolortin lorem ut.</p>
                  </div>
                  <div className="button button-center">
                    <a className="buttona" href>Xem Thêm</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="gym-home gym-home2 wow bounceInDown">
          <div className="h2">
            <h2><span>GYM</span>HLV </h2>
          </div>
          <p>Giảm từ 10-30% cho học phí HLV cá nhân từ tháng 6-8/2020</p>
        </div>
        <section className="section-2 ">
          <div className="container-fluid">
            <div className="row">

                 {
                   DulieuPT.map((value,key) =>{
                       return(
                        <ProductPT 
                        key={key}
                        hlvId={value.id}
                        name={value.name}
                        p={value.p}
                        contentp={value.contentp}
                        image={value.image}
                        image1={value.image1}
                        image2={value.image2}
                        image3={value.image3}
                        />

                       )
                   })
                 }

            </div>
          </div>
        </section>
        <div className="gym-home wow bounceInDown">
          <div className="h2">
            <h2><span>HOT </span>ƯU ĐÃI</h2>
          </div>
          <p>Kỉ Niệm sinh nhật lần thứ 10 của GymHome ưu đãi tại tất cả các cơ sở</p>
        </div>
        <section className="section-3">
          <div className="container-fluid wow slideRight">
            <div className="row row-box">
              <div className="col-md-4 col-sm-12 col-sx-12">
                <div className="img-slae-box wow rollIn">
                  <img src="https://www.afbgirls.com/wp-content/uploads/Key-Concept-Sexy-Boxing-Girl-Model-Wijitra-Key.jpeg" alt="" />
                </div>
              </div>
              <div className="col-md-8 col-sm-12 col-sx-12">
                <div className="content-md8 wow slideInRight" data-wow-delay="0.3s">
                  <div className="title-h2">
                    TẶNG O2 THÁNG <br />
                    <span className="span-box">TẬP BOXING</span> <br />
                      KHI ĐĂNG KÝ<br />
                      01 NĂM TẠI <span className="span1"><span className="spangym">GYM </span>FITNESS</span>
                  </div>
                  <p>are you a trainer? <a className="a-p" href>check this out.</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
    
      </div>
    )
  }
}

import React, { Component } from 'react'
import './odercart.css';
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
export default class odercart extends Component {
  static contextType = DataContext;

  componentDidMount(){
      this.context.getTotal();
  }
    render() {
      const {cart,increase,reduction,removeProduct,total} = this.context;
      if(cart.length === 0){
        return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
    }else{
      return (
        <>
        
        <div className=" banner-productss banner-cart">
                    <div class="slider-text">
                        <div class="content-text wow bounceInUp" data-wow-delay="0.1s">
                        
                        </div>
                    </div>
                </div>
        <div className="container-fluid container-fluid-oudercart">
        <div className="row">
          <div className="col-md-6 col-xs-12 col-md-6-col-xs-12">
            <div className="step-sections " step={1}>
              <div className="section">
                <div className="section-header">
                  <h2 className="section-title">Thông tin giao hàng</h2>
                </div>
                <div className="section-content section-customer-information no-mb">
                  <input name="utf8" type="hidden" defaultValue="✓" />
                  <div className="inventory_location_data">
                    <input name="customer_shipping_district" type="hidden" defaultValue />
                    <input name="customer_shipping_ward" type="hidden" defaultValue />
                  </div>
                  <p className="section-content-text">
                    Bạn đã có tài khoản?
                    <a href="/account/login?urlredirect=%2Fcheckouts%2Fcd67a4d58cca462dba213f08fa0f5468%3Fstep%3D1">Đăng
                      nhập</a>
                  </p>
                  <div className="fieldset">
                    <div className="field field-required">
                      <div className="field-input-wrapper">
                        <label className="field-label"  />
                        <input placeholder="Họ và tên" autoCapitalize="off" spellCheck="false" className="field-input" size={30} type="text" id="billing_address_full_name" />
                      </div>
                    </div>
                    <div className="field field-required field-two-thirds  ">
                      <div className="field-input-wrapper">
                        <label className="field-label" />
                        <input placeholder="Email" className="field-input" size={30} type="email" id="checkout_user_email" />
                      </div>
                    </div>
                    <div className="field field-required field-third  ">
                      <div className="field-input-wrapper">
                        <label className="field-label" />
                        <input placeholder="Số điện thoại" autoCapitalize="off" spellCheck="false" className="field-input" size={30} maxLength={11} type="tel" id="billing_address_phone" />
                      </div>
                    </div>
                    <div className="field field-required  ">
                      <div className="field-input-wrapper">
                        <label className="field-label" htmlFor="billing_address_address1" />
                        <input placeholder="Địa chỉ" autoCapitalize="off" spellCheck="false" className="field-input" size={30} type="text" id="billing_address_address1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-content">
                  <div className="fieldset">
                    <form id="form_update_location" className="clearfix order-checkout__loading" acceptCharset="UTF-8" method="post">
                      <input name="selected_customer_shipping_province" type="hidden" defaultValue />
                      <input name="selected_customer_shipping_district" type="hidden" defaultValue />
                      <input name="selected_customer_shipping_ward" type="hidden" defaultValue />
                      <input name="utf8" type="hidden" defaultValue="✓" />
                      <div className="order-checkout__loading--box">
                        <div className="order-checkout__loading--circle" />
                      </div>
                      <div className="field field-show-floating-label field-required field-third ">
                        <div className="field-input-wrapper field-input-wrapper-select">
                          <label className="field-label" htmlFor="customer_shipping_province" />
                          <select className="field-input" id="customer_shipping_province" name="customer_shipping_province">
                            <option data-code="null" value="null" selected> Chọn tỉnh / thành
                            </option>
                            <option data-code="HC" value={50}>Hồ Chí Minh</option>
                            <option data-code="HI" value={1}>Hà Nội</option>
                            <option data-code="DA" value={32}>Đà Nẵng</option>
                            <option data-code="AG" value={57}>An Giang</option>
                            <option data-code="BV" value={49}>Bà Rịa - Vũng Tàu</option>
                            <option data-code="BG" value={15}>Bắc Giang</option>
                            <option data-code="BK" value={4}>Bắc Kạn</option>
                            <option data-code="BL" value={62}>Bạc Liêu</option>
                            <option data-code="BN" value={18}>Bắc Ninh</option>
                            <option data-code="BT" value={53}>Bến Tre</option>
                            <option data-code="BD" value={35}>Bình Định</option>
                            <option data-code="BI" value={47}>Bình Dương</option>
                            <option data-code="BP" value={45}>Bình Phước</option>
                            <option data-code="BU" value={39}>Bình Thuận</option>
                            <option data-code="CM" value={63}>Cà Mau</option>
                            <option data-code="CN" value={59}>Cần Thơ</option>
                            <option data-code="CB" value={3}>Cao Bằng</option>
                            <option data-code="DC" value={42}>Đắk Lắk</option>
                            <option data-code="DO" value={43}>Đắk Nông</option>
                            <option data-code="DB" value={7}>Điện Biên</option>
                            <option data-code="DN" value={48}>Đồng Nai</option>
                            <option data-code="DT" value={56}>Đồng Tháp</option>
                            <option data-code="GL" value={41}>Gia Lai</option>
                            <option data-code="HG" value={2}>Hà Giang</option>
                            <option data-code="HM" value={23}>Hà Nam</option>
                            <option data-code="HT" value={28}>Hà Tĩnh</option>
                            <option data-code="HD" value={19}>Hải Dương</option>
                            <option data-code="HP" value={20}>Hải Phòng</option>
                            <option data-code="HU" value={60}>Hậu Giang</option>
                            <option data-code="HO" value={11}>Hòa Bình</option>
                            <option data-code="HY" value={21}>Hưng Yên</option>
                            <option data-code="KH" value={37}>Khánh Hòa</option>
                            <option data-code="KG" value={58}>Kiên Giang</option>
                            <option data-code="KT" value={40}>Kon Tum</option>
                            <option data-code="LI" value={8}>Lai Châu</option>
                            <option data-code="LD" value={44}>Lâm Đồng</option>
                            <option data-code="LS" value={13}>Lạng Sơn</option>
                            <option data-code="LO" value={6}>Lào Cai</option>
                            <option data-code="LA" value={51}>Long An</option>
                            <option data-code="ND" value={24}>Nam Định</option>
                            <option data-code="NA" value={27}>Nghệ An</option>
                            <option data-code="NB" value={25}>Ninh Bình</option>
                            <option data-code="NT" value={38}>Ninh Thuận</option>
                            <option data-code="PT" value={16}>Phú Thọ</option>
                            <option data-code="PY" value={36}>Phú Yên</option>
                            <option data-code="QB" value={29}>Quảng Bình</option>
                            <option data-code="QM" value={33}>Quảng Nam</option>
                            <option data-code="QG" value={34}>Quảng Ngãi</option>
                            <option data-code="QN" value={14}>Quảng Ninh</option>
                            <option data-code="QT" value={30}>Quảng Trị</option>
                            <option data-code="ST" value={61}>Sóc Trăng</option>
                            <option data-code="SL" value={9}>Sơn La</option>
                            <option data-code="TN" value={46}>Tây Ninh</option>
                            <option data-code="TB" value={22}>Thái Bình</option>
                            <option data-code="TY" value={12}>Thái Nguyên</option>
                            <option data-code="TH" value={26}>Thanh Hóa</option>
                            <option data-code="TT" value={31}>Thừa Thiên Huế</option>
                            <option data-code="TG" value={52}>Tiền Giang</option>
                            <option data-code="TV" value={54}>Trà Vinh</option>
                            <option data-code="TQ" value={5}>Tuyên Quang</option>
                            <option data-code="VL" value={55}>Vĩnh Long</option>
                            <option data-code="VT" value={17}>Vĩnh Phúc</option>
                            <option data-code="YB" value={10}>Yên Bái</option>
                          </select>
                        </div>
                      </div>
                      <div className="field field-show-floating-label field-required field-third active">
                        <div className="field-input-wrapper field-input-wrapper-select">
                          <label className="field-label" htmlFor="customer_shipping_district" />
                          <select className="field-input" id="customer_shipping_district" name="customer_shipping_district">
                            <option data-code="null" value="null" selected>Chọn quận / huyện
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="field field-show-floating-label field-required  field-third  active">
                        <div className="field-input-wrapper field-input-wrapper-select">
                          <label className="field-label" htmlFor="customer_shipping_ward" />
                          <select className="field-input" id="customer_shipping_ward" name="customer_shipping_ward">
                            <option data-code="null" value="null" selected>Chọn phường / xã
                            </option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="section-content section-customer-information fieldset" id="div_country_not_vietnam" style={{display: 'none'}}>
                    <div className="field field-two-thirds">
                      <div className="field-input-wrapper">
                        <label className="field-label" htmlFor="billing_address_city">Thành phố</label>
                        <input placeholder="Thành phố" autoCapitalize="off" spellCheck="false" className="field-input" size={30} type="text" id="billing_address_city" name="billing_address[city]" defaultValue />
                      </div>
                    </div>
                    <div className="field field-third">
                      <div className="field-input-wrapper">
                        <label className="field-label" htmlFor="billing_address_zip">Mã bưu chính</label>
                        <input placeholder="Mã bưu chính" autoCapitalize="off" spellCheck="false" className="field-input" size={30} type="text" id="billing_address_zip" name="billing_address[zip]" defaultValue />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="change_pick_location_or_shipping">
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 colll">
            
            {
                        cart.map(item =>(
                            <div className="details cart" key={item.id}>
                                <img className="image-odercart" src={item.image} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h3 className="name-cart name-cart-odercart">{item.name}</h3>
                                        <span className="price-oudercart">${item.price * item.count}</span>
                                    </div>
                                    {/* <Colors colors={item.colors}/> */}
                                    <p>Khối lượng: {item.size}g</p>
                                    {/* <p>{item.content}</p> */}
                                
                                </div>
                               
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/odercart">Thanh toán</Link>
                        <h3 className="price-oudercart">Tổng tiền: ${total}</h3>
                    </div>
          </div> 
        </div>
      </div>
    </>
    
    )
    }
       
    }
}

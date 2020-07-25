import React from 'react';
import './foodter.css'
function foodter(props) {
    return (
        <div>
            {/* map */}
            <div className="map_box">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61330.16152663314!2d105.78149591800916!3d21.032157607305106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1588646790176!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{ border: 0 }} />
                    <strong /> </div>
            </div>
            {/* map */}
            {/* foodter */}
            <footer className="main-footer wow bounceInUp">
                <div className="container-fluid">
                    <div className="row row-foodter">
                        <div className="footer-widget about-widget col-md-3 col-sm-6 col-xs-12"> <a href="#">
                            <h2 className="logo_name">GYM <span className="white_text">HOME </span> </h2>
                        </a>
                            <div className="widget-about">
                                <p>Chúng tôi quan niệm rằng không có bất cứ một khoản đầu tư nào quý giá hơn đầu tư cho chính bản thân. Khi đầu tư một cách đúng đắn cho việc tập luyện.</p>
                                <div className="social"><a className="fa fa-facebook-f" href="#" /> <a className="fa fa-twitter" href="#" />
                                    <a className="fa fa-instagram" href="#" /> <a className="fa fa-google-plus" href="#" /></div>
                            </div>
                        </div>
                        <div className="footer-widget quick-links col-md-2 col-sm-6 col-xs-12 ">
                            <h4>LINKS</h4>
                            <div className="widget-link">
                                <ul>
                                    <li> <a href="/">Home</a></li>
                                    <li> <a href="/GymHome">GymHome</a></li>
                                    <li> <a href="/RoomGym">Phòng Tập</a></li>
                                    <li> <a href="/Yoga">Yoga</a></li>
                                    <li> <a href="/Pt">Coach</a></li>
                                    <li> <a href="/Contact">Liên Hệ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-widget latest-work col-md-4 col-sm-6 col-xs-12 ">
                            <h4>Instagram</h4>
                            <div className="widget-post">
                                <div className="clearfix">
                                    <figure className="image"><a href="#"><img src="https://img.webthethao.vn/images/fullsize/2020/01/20/bi-quyet-an-tap-cuc-pham-cua-nu-hoang-phong-gym-trang-tracy-cho-tet-canh-ty-2020.jpg" alt="" /></a></figure>
                                    <figure className="image"><a href="#"><img src="https://www.elleman.vn/wp-content/uploads/2018/12/02/bai-tap-gym-elle-man-featured-image.jpg" alt="" /></a></figure>
                                    <figure className="image"><a href="#"><img src="https://swequity.vn/wp-content/uploads/2020/03/phong-gym-tot-o-ha-noi-1024x685.jpg" alt="" /></a></figure>
                                    <figure className="image"><a href="#"><img src="https://thegioidotap.vn/content/wp-content/uploads/2019/10/lich-tap-Gym-va-huong-dan-chi-tiet-ve-giao-an-tap-Gym-giam-can-tang-co-cho-nam-1.jpg" alt="" /></a></figure>
                                    <figure className="image"><a href="#"><img src="https://i-suckhoe.vnecdn.net/2019/01/08/37512123-1616778381766794-4555318038705995776-o-1546932036_680x0.jpg" alt="" /></a></figure>
                                    <figure className="image"><a href="#"><img src="https://lh3.googleusercontent.com/proxy/u7k8_qYbGNdMWuNxmTQkGtjgSU3L5-oUOT8979ex7PJT-1Ry88u-iqIJ7eK2a7Y0lU_L_m9glDK5OdnTvhvjiUa8kGksgfjOhfUCPguRze4bovRNHFo0zEwPww" alt="" /></a></figure>
                                </div>
                            </div>
                        </div>
                        <div className="footer-widget address col-md-3 col-sm-6 col-xs-12">
                            <h4>Contact us</h4>
                            <div className="widget-content">
                                <div className="address_box">
                                    <p><i className="fa fa-phone" />0333765265</p>
                                </div>
                                <div className="address_box">
                                    <p><i className="fa fa-envelope" />Tungnguyenvan9296@</p>
                                </div>
                                <div className="address_box1">
                                    <p><i className="fa fa-map-marker" /> Số 8 Sơn Đồng <br />
                      Hoài Đức - Hà Nội</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container ">© 2020 <a href="#">GYMHOME.</a> With All rights reserved.</div>
                </div>
            </footer>
            {/* foodter */}
            <button id="topBtn"><a href="#"><i className="fa fa-angle-up back-top" style={{ display: 'inline' }} /></a></button>
        </div>
    );
}

export default foodter;
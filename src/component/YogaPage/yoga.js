import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './yoga.css';
import DulieuYoga from '../YogaHlv/data-Yoga.json';
import ProductYoga from '../YogaHlv/ProductYogaItem'
import ProductYogaBlog from '../YogaBlog/ProductYogaBlog'
import DulieuYogaBlog from '../YogaBlog/data-YogaBlog.json'
import { WOW } from 'wowjs';
export default class yoga extends Component {
    componentDidMount() {
        const wow = new WOW({
            offset: 100,
            mobile: false,
            live: true
        })

        wow.init();
    }
    render() {
        var dem = 1;
        return (
            <div>
                <div className="banner-Yoga">
                    <div class="slider-text">
                        <div class="content-text content-text-boxing wow bounceInUp" data-wow-delay="0.1s">
                            <h4 className="title-yoga">Trải nghiệm tinh hoa Yoga Ấn Độ</h4>
                            <div></div>
                            <Link to="/" className="btn-primary">
                                Trang Chủ
                            </Link>
                        </div>
                    </div>
                </div>
                {/* BLOG */}
                <section className="blog-sec1" id="blog">
                    <div className="container container-sec1">
                        <div className="row">
                            <div className="col-md-12 wow bounceInDown" style={{ textAlign: 'center' }}>
                                <h2 className="title">TẬP YOGA CẦN</h2>
                            </div>
                            {
                                DulieuYogaBlog.map((value, key) => {

                                    if (dem <= 4) {
                                        dem++;
                                        return (
                                            <ProductYogaBlog
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
                                    }
                                    return;
                                })
                            }
                        </div>
                    </div>
                </section>
                {/* BLOG-END */}
                <section className="yoga-home">
                    <div className="content-container">
                        <div className="yoga-home-container">
                            <div className="sec1-yoga">
                                <div className="img-sec1-yoga wow bounceInLeft" />
                            </div>
                            <div className="sec2-yoga">
                                <div className="content-sec2-yoga">
                                    <h1 className="title-sec2-yoga wow bounceInRight" data-wow-delay="0.2s">
                                        Tập Yoga tiêu tốn nhiều calo hơn bạn nghĩ
                                     </h1>
                                    <div className="p-content-sec2 wow bounceInRight" data-wow-delay="0.4s">
                                        Sự đa dạng của các động tác: xoay, cúi, gập, duỗi,… trong Yoga tác động chính xác đến vùng bụng, lưng và hông – khu vực tích mỡ nhiều.Tập luyện Yoga đều đặn, cơ thể bạn sẽ thay đổi: eo thon gọn, vóc dáng mềm mại và đường sóng lưng gợi cảm.* Kết quả tập luyện phụ thuộc vào cơ địa và nỗ lực của mỗi người.
                                    </div>


                                    <a className="wow bounceInRight button-yogo-add" data-wow-delay="0.6s" href data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'slideInLeft' }}>Đăng Ký</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="father-section-3">
                    <div className="section-3-yoga">
                        <div className="content-section-3-yoga">
                            <h2 class="f-header-h2 wow bounceInLeft" data-wow-delay="0.2s">Trẻ hóa cơ thể nhờ thải độc từ sâu bên trong</h2>
                            <p class="wow bounceInLeft" data-wow-delay="0.4s">Yoga kích hoạt 7 tuyến nội tiết quan trọng của cơ thể, thúc đẩy tế bào sản sinh liên tục
nhờ đó giúp bạn tái tạo một làn da mới, cơ thể mới đầy sức sống.</p>
                            <a href="#" class="btn button-sec2-yoga wow bounceInLeft" data-wow-delay="0.6s" data-new-tracking-action="Community - Glo Homepage CTA Clicked">Xem Thêm</a>
                        </div>
                    </div>
                </div>
                <div className="father-section-4">
                    <div className="section-4-yoga">
                        <div className="content-section-4-yoga">
                            <h2 class="f-header-h4 wow bounceInRight" data-wow-delay="0.2s">Liều thuốc hoàn hảo cho một ngày căng thẳng</h2>
                            <p class="wow bounceInRight" data-wow-delay="0.4s">Phương pháp hít thở trong Yoga giúp giải tỏa strees và thư giãn tâm hồn cũng như cơ thể:<br />
                                Tập trung tốt hơn<br />
                                Giảm tình trạng căng cơ<br />
                                Xoa dịu các cơ quan bên trong<br />
                                Ngủ ngon hơn<br />
                            </p>

                            <a href="#" class="btn button-sec2-yoga wow bounceInRight" data-wow-delay="0.6s" data-new-tracking-action="Community - Glo Homepage CTA Clicked">Xem Thêm</a>

                        </div>
                    </div>
                </div>
                {/* SECTION 5 */}
                <div className="gym-home gym-home2 gym-home2-yoga ">
                    <div className="h2 wow bounceInDown">
                        <h2><span>GYM</span>YOGA </h2>
                    </div>
                    <p className="wow bounceInUp" data-wow-delay="0.3s">Giảm từ 10-30% cho học phí HLV cá nhân từ tháng 6-8/2020</p>
                </div>
                {/* BEGIN-SECTION4 */}
                <section className="section-2">
                    <div className="container-fluid">
                        <div className="row">

                            {
                                DulieuYoga.map((value, key) => {
                                    return (
                                        <ProductYoga
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
                {/* END-SECTION-4 */}



                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-yogo-1" role="document">
                        <div className="modal-content modal-content-1 modal-yogo-1">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">ĐĂNG KÝ TẬP THỬ</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-content-p">
                                <p>To get your Full Membership Experience.
                  Choose your preferred trial membership below.</p>
                            </div>
                            <div className="modal-body">
                                <form action="#" method="post" id="cassiopeia-regiter-join-today-form" acceptCharset="UTF-8">
                                    <div>
                                        <div className="form-group">
                                            <div className="input-group"><span className="input-group-addon"><i className="fas fa-user" aria-hidden="true" /></span><input placeholder="Full Name" className="form-control form-text required" type="text" id="edit-fullname" name="fullname" defaultValue size={60} maxLength={128} value="" /></div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group"><span className="input-group-addon"><i className="fa fa-phone" aria-hidden="true" /></span><input placeholder="Phone number" className="form-control form-text required" type="text" id="edit-phonenumber" name="phonenumber" defaultValue size={60} maxLength={128} value="" /></div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group"><span className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true" /></span><input placeholder="Địa chỉ thư điện tử" className="form-control form-text required" type="text" id="edit-email" name="email" defaultValue size={60} maxLength={128} value="" /></div>
                                        </div><input type="hidden" name="nodeId" defaultValue={28} />
                                        <button type="submit" id="edit-submit" name="op" value="Đăng ký tập thử" className="btn btn-default form-submit">Đăng ký tập thử</button>
                                        <input type="hidden" name="form_build_id" defaultValue="form-7IXDf9G4Q5PP3QU-dwAOmiHAsicYIx-8YXwtUc3UW8Q" />
                                        <input type="hidden" name="form_id" defaultValue="cassiopeia_regiter_join_today_form" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className=" btn-secondary" data-dismiss="modal"><span aria-hidden="true">×</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
            </div>
        )
    }
}

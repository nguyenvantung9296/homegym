import React, { Component } from 'react'
import './homePage.css';
import Isotope from './isotope';
import { WOW } from 'wowjs';
import ProductItem2 from './ProductItem2';
import {DataContext} from '../ShoppingCart/Context'

export default class HomePage extends Component {
    static contextType = DataContext;
    componentDidMount() {
        const wow = new WOW({
            offset: 100,
            mobile: false,
            live: true
        })

        wow.init();
    }
    render() {
        const {products} = this.context;
        var dem = 1;
        return (
            <div>
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators carousel-indicators1">
                        <li data-target="#carouselId" data-slide-to={0} className="active wow bounceInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'bounceInUp' }} />
                        <li data-target="#carouselId" data-slide-to={1} className="active wow bounceInUp" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'bounceInUp' }} />
                        <li data-target="#carouselId" data-slide-to={2} className="active wow bounceInUp" data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'bounceInUp' }} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active carousel-item1">
                            {/*NAVIGATION*/}
                            <video src="https://nguyenvantung9296.github.io/webgym/img/gym.mp4" autoPlay loop muted type="mp4" />{/* muted */}
                            {/* type="mp4" */}
                            <div className="content-item1">
                                <div className="textBox wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                                    <h2 className="wow slideInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'slideInLeft' }}>Đăng ký nhận thưởng</h2>
                                    <p className="wow slideInLeft" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'slideInLeft' }}>
                                        Đăng ký tập gym , nhận tour du lịch liền tay cùng GymHome.
                                        Vậy bạn còn đợi điều gì mà không đến ngay GymHome để đăng kí thẻ tập và tham gia chương trình bốc thăm trúng thưởng kì nghỉ dưỡng tại du thuyền Oasis Bay tham quan vịnh Hạ Long. Chương trình áp dụng duy nhất trong tháng 6.
                                    </p>
                                    <a className="wow slideInLeft" data-wow-delay="0.8s" href="#" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'slideInLeft' }}>Đăng Ký</a>
                                </div>
                                <div className="imgBox wow slideInRight" style={{ visibility: 'visible', animationName: 'slideInRight' }}>
                                    <img src="https://nguyenvantung9296.github.io/webgym/img/man.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item1 carousel-item2">
                            <img className="img-banner" src="https://nguyenvantung9296.github.io/webgym/img/slide-1.jpg " alt="Second slide" />
                            <div className="content-item1">
                                <div className="textBox wow slideInLeft animated" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                                    <h2 className="wow slideInLeft animated" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'slideInLeft' }}>Khuyến Mãi tháng 4</h2>
                                    <p className="wow slideInLeft animated" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'slideInLeft' }}>
                                    Bạn muốn tập gym để giảm mỡ nhanh và an toàn tại môi trường chuyên nghiệp nhưng vẫn còn ngại về chi phí? Thấu hiểu điều đó, phòng tập GymHome Fitness mang tới cơn bão GYM ĐÚNG – KẾT QUẢ THẬT cùng với chương trình khuyến mại cô cùng hấp dẫn.</p>
                                    <a className="wow slideInLeft animated" data-wow-delay="0.8s" href data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'slideInLeft' }}>Đăng Ký</a>
                                </div>
                                <div className="imgBox wow slideInRight animated" style={{ visibility: 'visible', animationName: 'slideInRight' }}>
                                    <img className="img-banner3" src="https://nguyenvantung9296.github.io/webgym/img/banner4.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item3">
                            <img className="img-banner-c3" src="https://nguyenvantung9296.github.io/webgym/img/modal-video.jpg" alt="Third slide" />
                            <div className="content-item1">
                                <div className="textBox wow slideInLeft animated" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                                    <h2 className="wow slideInLeft animated" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'slideInLeft' }}>Khuyến Mãi tháng 4</h2>
                                    <p className="wow slideInLeft animated" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'slideInLeft' }}>Error phasellus commodo doloribus placerat consectetuer nec fuga, cubilia, reprehenderit
                                    velit.
                                    Excepturi? Voluptatum mus rhoncus aspernatur aliqua! Platea phasellus porttitor
                                    necessitatibus ut,
                      labore lectus, magna sapien metus! Vestibulum, sed. E</p>
                                    <a className="wow slideInLeft animated" data-wow-delay="0.8s" href data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'slideInLeft' }}>Đăng Ký</a>
                                </div>
                                <div className="imgBox wow slideInRight animated" style={{ visibility: 'visible', animationName: 'slideInRight' }}>
                                    <img className="img-banner3" src="https://theme.hstatic.net/1000326314/1000514996/14/pro_featured_img.png?v=19" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev carousel-left" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next carousel-right" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                    <div className="modal fade" id="exampleModal" >
                        <div className="modal-dialog">
                            <div className="modal-content modal-content-1">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">SIGN UP NOW</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-content-p">
                                    <p>To get your Full Membership Experience.
                      Choose your preferred trial membership below.</p>
                                </div>
                                <div className="modal-body">
                                    <form action="/vi/lop-hoc-yoga.html" method="post" id="cassiopeia-regiter-join-today-form" acceptCharset="UTF-8">
                                        <div>
                                            <div className="form-group">
                                                <div className="input-group"><span className="input-group-addon"><i className="fas fa-user" aria-hidden="true" /></span><input placeholder="Full Name" className="form-control form-text required" type="text" id="edit-fullname" name="fullname" defaultValue size={60} maxLength={128} value="" /></div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-phone" aria-hidden="true" /></span><input placeholder="Phone number" className="form-control form-text required" type="text" id="edit-phonenumber" name="phonenumber" defaultValue size={60} maxLength={128} value="" /></div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group"><span className="input-group-addon"><i className="fa fa-envelope-o" aria-hidden="true" /></span><input placeholder="Địa chỉ thư điện tử" className="form-control form-text required" type="text" id="edit-email" name="email" defaultValue size={60} maxLength={128} value="" /></div>
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
                    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{ zIndex: 1007 }}>
                        <div className="modal-dialog modal-dialog-centered modal-dialog2" role="document">
                            <div className="modal-content modal-content2">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Đăng Nhập</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form action="#">
                                        <div className="input-field">
                                            <i className="fas fa-user" aria-hidden="true" />
                                            <input type="text" id="name" placeholder="Tên đăng nhập" />
                                            {/* <label for="name">Username</label> */}
                                        </div>
                                        <div className="input-field">
                                            <i className="fas fa-lock" aria-hidden="true" />
                                            <input type="password" id="pass" placeholder="Mật khẩu" />
                                            {/* <label for="pass">Password</label> */}
                                        </div>
                                        <div className="left" style={{ marginLeft: '20px' }}>
                                            <input type="checkbox" id="check" />
                                            <label htmlFor="check">Remember Me</label>
                                        </div>
                                        <div className="submit-login">
                                            <input type="submit" defaultValue="Login" className="btn btn-large" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">x</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container container-01">
                    <div className="row row01">
                        <div className="col-md-12">
                            <div className="content-title-row01">
                                <h3>WORKOUTS</h3>
                                <p>Các bài tập phổ biến tại Gym Home</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sec sec1 wow slideInLeft">
                                <div className="img-small">
                                    <img src="https://media.giphy.com/media/lKvMu6p3NhVNXrq0iJ/giphy.gif" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name-content">Bài Tập vai xô</p>
                                    <h5>Cải Thiện Cơ Bắp</h5>
                                    <p>Condimentum. Veniam taciti accusantium ligula commodo mollis tempus ipsa? Adipisci repellat
                                    fusce, irure quo culpa hymenaeos distinctio? Quidem
                      </p>
                                    <span>Ngày 01/02/2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sec sec2 wow slideInRight">
                                <div className="img-small">
                                    <img src="https://i.pinimg.com/originals/3f/7e/44/3f7e441966c090a4d6c6ac23a16feff9.gif" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name-content">Bài Tập vai xô</p>
                                    <h5>Cải Thiện Cơ Bắp</h5>
                                    <p>Condimentum. Veniam taciti accusantium ligula commodo mollis tempus ipsa? Adipisci repellat
                                    fusce, irure quo culpa hymenaeos distinctio? Quidem
                      </p>
                                    <span>Ngày 01/02/2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row2">
                        <div className="col-md-6">
                            <div className="sec sec1 wow slideInLeft" data-wow-delay="0.5s">
                                <div className="img-small">
                                    <img src="https://i.gifer.com/7dUp.gif" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name-content">Bài Tập vai xô</p>
                                    <h5>Cải Thiện Cơ Bắp</h5>
                                    <p>Condimentum. Veniam taciti accusantium ligula commodo mollis tempus ipsa? Adipisci repellat
                                    fusce, irure quo culpa hymenaeos distinctio? Quidem
                      </p>
                                    <span>Ngày 01/02/2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sec sec2 wow slideInRight" data-wow-delay="0.5s">
                                <div className="img-small">
                                    <img src="https://thumbs.gfycat.com/OffensiveGiantEmperorpenguin-size_restricted.gif" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name-content">Bài Tập vai xô</p>
                                    <h5>Cải Thiện Cơ Bắp</h5>
                                    <p>Condimentum. Veniam taciti accusantium ligula commodo mollis tempus ipsa? Adipisci repellat
                                    fusce, irure quo culpa hymenaeos distinctio? Quidem
                      </p>
                                    <span>Ngày 01/02/2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fliud">
                    <div className="row row3">
                        <div className="col-md-4">
                            <div className="img-content-row3" >
                                <img className="wow bounceInDown" data-wow-delay="0.3s" src="https://nguyenvantung9296.github.io/webgym/img/gym01.png" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="content content01 wow slideInRight" data-wow-delay="0.3s">
                                <h3 className="h3-gymhome-today"><span className="span1">YoGa</span> Home <span>To Day</span></h3>
                                <p>Giảm cân, giữ dáng hiệu quả dài lâu ,với phương pháp Yoga Ấn Độ. Tập YoGa tốn calo hơn bạ  nghĩ : Sự đa dạng của các động tác: xoay, cúi, gập, duỗi,… trong Yoga tác động chính xác đến vùng bụng, lưng và hông – khu vực tích mỡ nhiều.Tập luyện Yoga đều đặn, cơ thể bạn sẽ thay đổi: eo thon gọn, vóc dáng mềm mại và đường sóng lưng gợi cảm.</p>
                                <a href={"Yoga"} className="btn-primary">Xem Thêm</a>
                            </div>
                        </div>
                        <div className="background background01 wow slideInRight" />
                    </div>
                </div>
                <div className="container container--isope">
                    <div className="row4">
                        <div className="row row-abum">
                            <div className="title-gymhome">
                                <div className="title-gym wow bounceInDown">
                                    <h3 >GYM <span style={{ fontFamily: '"Baloo" !important' }}>HOME</span> TO DAY</h3>
                                </div>
                            </div>

                            <Isotope />
                        </div>
                    </div>
                </div>
                <div className="container-fliud container-fliud-row32">
                    <div className="row row3 row32">
                        <div className="col">
                            <div className="content content31 wow bounceInLeft">
                                <h3 className="h3-gymhome-today"><span className="span1">Boxing</span> Home <span>To Day</span></h3>
                                <p>Bạn muốn tìm tới một bộ môn phòng tập khác vừa có được thể hình săn chắc khoẻ mạnh lại được xả tress, tập luyện cùng với các HLV chuyên nghiệp.Vậy thì tại sao không tới với Boxing Home để cảm nhận sự khác biệt với buổi tập thử FREE 100% cùng Huấn luyện viên</p>
                                <a href={"/Boxing"} className="btn-primary">Xem Thêm</a>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-6 col-md-7-03">
                            <div className="img-content-row3 img-content-row31">
                                <img className="wow bounceInDown" data-wow-delay="0.3s" src="https://nguyenvantung9296.github.io/webgym/img/man2.png" alt="" />
                            </div>
                        </div>
                        <div className="background background2 wow bounceInRight" />
                    </div>
                </div>
                <div className="container-fliud row-overflow">
                    <div className="row row05">
                        <div className="col-md-7 col-md-7-05">
                            <div className="imgae-man wow bounceInDown" data-wow-delay="0.5s">
                                <img src="https://nguyenvantung9296.github.io/webgym/img/man3.png" alt="" />
                            </div>
                            <div className="center-div">
                                <div className="name wow slideInLeft">
                                    <ul>
                                        <li className="wow bounceInLeft" data-wow-delay="0.3s">Cơ Bắp</li>
                                        <li className="wow bounceInLeft" data-wow-delay="0.5s">Sức khỏe</li>
                                        <li className="wow bounceInLeft" data-wow-delay="0.7s">Tinh Thần</li>
                                        <li className="wow bounceInLeft" data-wow-delay="0.9s">Cân Bằng</li>
                                    </ul>
                                </div>
                                <div className="div-color wow bounceInDown" data-wow-delay="0.5s" />
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="content1 content-col wow slideInRight" data-wow-delay="0.2s">
                                <div className="image-icon">
                                    <img src="img/fitness.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h6>BÀI TẬP BỔ TRỢ CỦA GYM HOME</h6>
                                    <p>Tempor possimus? Laboriosam laboris nibh vitae cubilia rhoncus congue </p>
                                </div>
                            </div>
                            <div className="content2 content-col wow slideInRight" data-wow-delay="0.3s">
                                <div className="image-icon">
                                    <img src="img/tape.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h6>BÀI TẬP BỔ TRỢ CỦA GYM HOME</h6>
                                    <p>Tempor possimus? Laboriosam laboris nibh vitae cubilia rhoncus congue </p>
                                </div>
                            </div>
                            <div className="content3 content-col wow slideInRight " data-wow-delay="0.4s">
                                <div className="image-icon">
                                    <img src="img/sports-and-competition.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h6>BÀI TẬP BỔ TRỢ CỦA GYM HOME</h6>
                                    <p>Tempor possimus? Laboriosam laboris nibh vitae cubilia rhoncus congue </p>
                                </div>
                            </div>
                        </div>
                        <div className="background3 wow slideInRight" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="div-title wow bounceInDown">
                                <h2>GYM <span style={{ color: '#37d72f', fontFamily: '"Baloo"' }}>HOME</span></h2>
                                <p>Hoàn thiện bản thân cùng GymHome!</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* REVIEW-GYM */}
                <div className="container-fluid container-gymfit wow bounceInUp " data-wow-delay="0.3s">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="img-full" src="https://nguyenvantung9296.github.io/webgym/img/gym1.jpg" alt="First slide" />
                                        <img className="img-600" src="https://nguyenvantung9296.github.io/webgym/img/gym01.jpg" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-full" src="https://nguyenvantung9296.github.io/webgym/img/gym2.jpg" alt="Second slide" />
                                        <img className="img-600" src="https://nguyenvantung9296.github.io/webgym/img/gym02.jpg" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-full" src="https://nguyenvantung9296.github.io/webgym/img/gym3.jpg" alt="Third slide" />
                                        <img className="img-600" src="https://nguyenvantung9296.github.io/webgym/img/gym03.jpg" alt="First slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END-REVIEW-GYM */}
                {/*over container*/}
                <div className="container-fluid container-fluid-carousel">
                    <div className="row row006">
                        <div className="col-md-12">
                            <div className="div-title">
                                <h3>WHEY PROTEIN</h3>
                                <p>Sản Phẩm Chức Năng</p>
                            </div>
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
                                                                        <ProductItem2 key={item.id}
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
        );
    }
}

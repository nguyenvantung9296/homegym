import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/boxing.css';
import play from './img/arow1.png';
export default class Boxing extends Component {
    render() {
        return (
            <div>

                <div className="banner-Boxing">
                    <div class="slider-text">
                        <div class="content-text content-text-boxing wow bounceInUp" data-wow-delay="0.1s">
                            <h4>Boxing GymHome</h4>
                            <div></div>
                            <Link to="/" className="btn-primary">
                                Trang Chủ
                    </Link>
                        </div>
                    </div>
                </div>
                <section className="section-1">
                    <div className="container container-sec1">
                        <div className="row row1">
                            <div className="col-md-12">
                                <div className="name-title">
                                    <h2>AI CẦN HỌC</h2>
                                    <p>Học Boxing để làm gì</p>
                                </div>
                            </div>
                        </div>
                        <div className="row row2">
                            <div className="col-md-6 col-sm-6">
                                <div className="img">
                                    <img src="https://i2.wp.com/kickfitvietnam.com/wp-content/uploads/2018/11/Muaythai1.jpg?resize=960%2C540" alt="" />
                                    <div className="background-banner background-banner2" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="img">
                                    <img src="https://i0.wp.com/blog.wefit.vn/wp-content/uploads/2017/11/Kickfit-01.jpg?fit=1920%2C960&ssl=1" alt="" />
                                    <div className="background-banner background-banner2" />
                                </div>
                            </div>
                        </div>
                        <div className="row row31">
                            <div className="col-md-12">
                                <div className="content-row3">
                                    <p>Deis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptar</p>
                                    <a className="button-row3" href>Xem Chi Tiết</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section2-video">
                    <div className="container-fluid">
                        <div className="row row-video">
                            <div className="col-md-12">
                                <a className="video-link" href data-width={550} data-height={350} type="button" data-toggle="modal" data-target="#exampleModalCenter"> <img src={play} alt="" /> </a>
                                <h2 className="h2-video-modal">Explore Fitness Complex </h2>
                                <h2 className="green_text"><a className="video-link" href data-width={550} data-height={350}> Watch now</a></h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="course_sec section-3" id="course">
                    <div className="container">
                        <div className="col-md-12 title-course">
                            <div className="course_sec_title">
                                <h2>our Courses</h2>
                                <p>we aim to transform your abilities </p>
                            </div>
                        </div>
                        <div className="course-list">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="img_course1">
                                            <img src="https://triggerboxing.vn/attachs/2952d886a7083a86a5554f954de128ae.jpg" alt="" />
                                            <a href="#" className="course_read">Read More</a>
                                        </div>
                                        <div className="course_con1">
                                            <h3>Conjugate Methods</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="img_course1">
                                            <img src="https://triggerboxing.vn/attachs/7bbc86846994a67c1898d19aac5920d7.jpg" alt="" />
                                            <a href="#" className="course_read">Read More</a>
                                        </div>
                                        <div className="course_con1">
                                            <h3>Kettlebell</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="img_course1">
                                            <img src="https://petrotimes.vn/stores/news_dataimages/vuphong/032020/21/00/1851_Hoa_hau_Khanh_Van_6.jpg" alt="" />
                                            <a href="#" className="course_read">Read More</a>
                                        </div>
                                        <div className="course_con1">
                                            <h3>Kettlebell</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="img_course1">
                                            <img src="https://triggerboxing.vn/attachs/fb583678a6d71607c1489d09cc2cb089.jpg" alt="" />
                                            <a href="#" className="course_read">Read More</a>
                                        </div>
                                        <div className="course_con1">
                                            <h3>Advanced Gymnastics</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="img_course1">
                                            <img src="https://triggerboxing.vn/attachs/7bbc86846994a67c1898d19aac5920d7.jpg" alt="" />
                                            <a href="#" className="course_read">Read More</a>
                                        </div>
                                        <div className="course_con1">
                                            <h3>Striking</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="img_course1">
                                            <img src="https://sohanews.sohacdn.com/k:2015/8-diem-my-9x-1443255012648/bong-mat-voi-hinh-anh-cuc-ky-goi-cam-cua-boxing-girl-diem-my-9x.jpg" alt="" />
                                            <a href="#" className="course_read">Read More</a>
                                        </div>
                                        <div className="course_con1">
                                            <h3>Weightlifting</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           
            
            
            {/* MODAL-VIDEO */}
      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modal-content-video">
    
            <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              {/* MODAL-VIDEO */}
              <div className="player js--show-video">
                <div className="player__video">
                  <div className="video-filler" /><iframe height="500px" src="https://www.youtube.com/embed/gCMw1E1M7xk" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <div />
              </div>
              {/* MODAL-VIDEO */}
            </div>
          </div>
        </div>
      </div>
      {/* END-MODAL-VIDEO */}
            
            
            </div>
        )
    }
}

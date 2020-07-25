import React, { Component } from 'react'
import './lostdate.css';
import Isotope_LostDate from './isotope_LostDate';
import Click from '../img/arow1.png'
export default class Lostdate extends Component {
    render() {
        return (
            <div>

                <div className="container container-Isotope ">
                    <Isotope_LostDate />
                </div>
                {/* VIDEO */}
                <section className="video_sec">
                    <div className="container-fluid">
                        <div className="row row-video"> <a className="video-link" href data-width={550} data-height={350} type="button" data-toggle="modal" data-target="#exampleModalCenter"> <img src={Click} alt="" /> </a>
                            <h2 className="wow bounceInUp">TẬP LUYỆN CÙNG GYMHOME</h2>
                            <h2 className="green_text wow bounceInUp" data-wow-delay="0.5s"><a className="video-link" href data-width={550} data-height={350}>Xem Ngay</a></h2>
                        </div>
                    </div>
                </section>
                {/* VIDEO */}
                {/* Modal */}
                {/* BLOG */}
                <section className="blog-sec1" id="blog">
                    <div className="contaier">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title">GYM-HOME BLOG</h2>
                                <p className="p-title">Proin ullamcorper ea asperiores natoque vestibulum cubilia! Officia elementum? Quasi impedit ea hendrerit id. Feugiat inceptos etiam</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="blog-father">
                    <div className="blog-1">
                        <div className="card wow bounceInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'bounceInUp' }}>
                            <img src="https://img.cfyc.com.vn/phn_image/Cali%20p2/che%CC%82%CC%81%20%C4%91o%CC%A3%CC%82%20dinh%20du%CC%9Bo%CC%9B%CC%83ng%20cho%20ngu%CC%9Bo%CC%9B%CC%80i%20ta%CC%A3%CC%82p%20gym%204.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Bạn cần động lực thay đổi bản thân !</h5>
                                <p className="card-text">03/21/2019 10:20:13 PM</p>
                                <a href="#" className="btn btn-primary button-row3">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-2">
                        <div className="card wow bounceInUp" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'bounceInUp' }}>
                            <img src="https://media.thethao247.vn/upload/thanhtung/2019/04/24/thuc-pham-chuc-nang-tap-gym.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Chất dinh dưỡng cần thiết cho Gymmer</h5>
                                <p className="card-text">9/21/2019 10:20:13 PM</p>
                                <a href="#" className="btn btn-primary button-row3">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-3">
                        <div className="card wow bounceInUp" data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'bounceInUp' }}>
                            <img src="https://as1.ftcdn.net/jpg/02/17/41/88/500_F_217418804_jO6gKS5IpfI6zbV98XocUY8vVcOgPCLy.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Những bài tập hiệu quả cao cho cơ vai</h5>
                                <p className="card-text">
                                    3/20/2020 10:20:23 PM</p>
                                <a href="#" className="btn btn-primary button-row3">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BLOG-END */}
                <button id="topBtn"><a href="#"><i className="fa fa-angle-up back-top" style={{ display: 'inline' }} /></a></button>
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content modal-content-lostdata">
                            <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                {/* MODAL-VIDEO */}
                                <div className="player js--show-video">
                                    <div className="player__video">
                                        <div className="video-filler" /><iframe width="100%" height="100%" src="https://www.youtube.com/embed/uRTLaKE4JTA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div />
                                </div>
                                {/* MODAL-VIDEO */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

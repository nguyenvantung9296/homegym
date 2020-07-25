//rafc
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Contact.css'
import {WOW} from 'wowjs';
class Contact extends Component {
    componentDidMount() {
		const wow = new WOW({
		  offset: 100,
		  mobile: false, 
		  live: true 
		})

		wow.init();
	}
    constructor(props) {
        super(props);
        this.state = {
            isRedirrect: false, //co chuyen huong khong ? mac dinh la flase
            fName: "",  //luu tru dulieu cua ischange qua state
            fEmail: "",
            fFhone: "",
            fMessage: "Tôi rất hài lòng về hương vị nhưng còn một số điểm nhỏ như ...",
            fNgay: "thu7"
        }
    }
    submitFrom = (event) => {
        event.preventDefault();//ham ngan chan load trang contact
        this.setState({
            isRedirrect: true
        });
    }
    ischange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        // console.log(ten);
        // console.log(giatri);
        this.setState({
            //  [name]: value
            [ten]: giatri
        });
    }
    getGiaTri = () => {
        var NoiDung = "";
        NoiDung += "Ten nhan dc la" + this.state.fName;
        NoiDung += " / Email nhan dc la" + this.state.fEmail;
        NoiDung += " / Fhone nhan dc la" + this.state.fFhone;
        NoiDung += " / Message nhan dc la" + this.state.fMessage;
        NoiDung += " / Ngay nhan dc la" + this.state.fNgay;
        NoiDung += " / ảnh nhan dc la : " + this.state.fAnh;
        return NoiDung;

    }

    render() {
        if (this.state.isRedirrect) {//trong truong hop dung, tuc la === true thi
            console.log(this.getGiaTri())
            return <Redirect to="/home" />
        }
        return (
            <div className="contact-page">
                {/* begin-content */}

                <div className="banner-productss">
                    <div class="slider-text">
                        <div class="content-text content-text-boxing wow bounceInUp" data-wow-delay="0.1s">
                            <h4 className="title-yoga">Contact</h4>
                            <div></div>
                            <Link to="/" className="btn-primary">
                                Trang Chủ
                                </Link>
                        </div>
                    </div>
                </div>
                <section className="page-section" id="contact">
                    <div className="container">

                        <div className="divider-custom">
                            <div className="divider-custom-line wow bounceInDown" data-wow-delay="0.2s" />
                            <div className="divider-custom-icon wow bounceInDown" data-wow-delay="0.4s"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> */}</div>
                            <div className="divider-custom-line wow bounceInDown" data-wow-delay="0.6s" />
                        </div>
                        {/* Contact Section Form*/}
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Name</label><input onChange={(event) => this.ischange(event)} name="fName" className="form-control" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label><input onChange={(event) => this.ischange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                            <p className="help-block  text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Phone Number</label><input onChange={(event) => this.ischange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Message</label><textarea onChange={(event) => this.ischange(event)} name="fMessage" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Chon Ngay</label>
                                            <select value={this.state.fNgay} onChange={(event) => this.ischange(event)} className="form-control" name="fNgay" id="ngay">
                                                <option value="thu2">Thứ Hai</option>
                                                <option value="thu3">Thứ Ba</option>
                                                <option value="thu4">Thứ Tư</option>
                                                <option value="thu5">Thứ Năm</option>
                                                <option value="thu6">Thứ Sáu</option>
                                                <option value="thu7">Thứ Bảy</option>
                                                <option value="chunhat">Chủ Nhật</option>
                                            </select>
                                        </div>
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div id="success" />
                                    <div className="form-group" onClick={(event) => this.submitFrom(event)}><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Gửi</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end-content */}
            

            </div>
        );
    }
}

export default Contact;
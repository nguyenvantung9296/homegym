import React, { Component } from 'react'

export default class ProductPtItem extends Component {
    // begin chuyendoi duong dan URL tu tieng viet sang tieng anh k dau
    chuyenDoiURL = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    // end chuyendoi duong dan URL tu tieng viet sang tieng anh k dau  
    render() {
        return (
            <div className="col-md-6 out-trainer-col wow bounceInUp" data-wow-delay="0.2s">
                <div className="out-trainer-item">
                    <a href={"/chitiet/" + this.chuyenDoiURL(this.props.name)  + "." + this.props.hlvId} >
                        <img src={this.props.image} alt="" />
                    </a>
                    <div className="out-trainer-info">
                        <h3><a href="#">{this.props.name}</a></h3>
                        <div className="prof">HLV Cá Nhân</div>
                        <p>
                            {this.props.p}
                        </p>
                        <ul className="social-list">
                            <li><a target="_blank" href="https://www.facebook.com/rovadex"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a target="_blank" href="https://twitter.com/RovadexStudio"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                            <li><a target="_blank" href="https://www.youtube.com"><i className="fa fa-youtube" aria-hidden="true" /></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/rovadex"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

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
            <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="img-col">
                    <img className="wow bounceInDown" src={this.props.image} alt="" />
                </div>
                <div className="content-name ">
                    <div className="name">
                        {this.props.name}
                    </div>
                   <p>HLV Cá Nhân</p>
                </div>
                <div className="button-click">
                <a href={"/chitiet/" + this.chuyenDoiURL(this.props.name)  + "." + this.props.hlvId} className="btn btn-primary">Xem Thêm</a>
                </div>
            </div>
        )
    }
}

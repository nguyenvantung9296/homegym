import React, { Component } from 'react'

export default class ProductPtItemClick extends Component {
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
            
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="item wow bounceInUp" data-wow-delay="0.2s">
                    <div className="card card-yoga">
                        <div className="img-icon">
                            <img src={this.props.image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"> {this.props.name} </h5>
                            <p className="card-text">
                                {this.props.p}
                            </p>
                            <a href={"/BlogYoga/" + this.chuyenDoiURL(this.props.name) + "." + this.props.hlvId} className=""><p><i className="fas fa-arrow-right" /></p></a>
                        </div>
                    </div>
                </div>
            </div>
        )
      
    }
}
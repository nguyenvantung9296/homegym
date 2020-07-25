


import React, { Component } from 'react'
import './css/productList.css';
import {DataContext} from './ShoppingCart/Context'
export default class ProductPtItem extends Component {
    static contextType = DataContext;
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
        const {addCart} = this.context;
        return (
            <article className="product wow bounceInUp">
            <div className="img-container">
                <img src={this.props.image} alt="single product" />
                <div className="price-top">
                    <h6>${this.props.price}</h6>
                    <p>Sale 10-20%</p>
                </div>
                <div className="content-cart-card">
                <a href={"/ContentProduct2/" + this.chuyenDoiURL(this.props.name) + "." + this.props.id} className="name-cart-1"> {this.props.name} </a>
                <p>${this.props.price}</p>
               
                <button onClick={()=> addCart(this.props.id)}>Add to cart</button>
                </div>
            </div>
          
        </article>




        )
    }
}

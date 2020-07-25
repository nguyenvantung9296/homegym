import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import iconnav from './img/toggle.png'
import './css/Nav.css';
import CartIcon from './shopping-cart-solid.svg'
import {DataContext} from './ShoppingCart/Context'
export default class NavBar extends Component {
    static contextType = DataContext;
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        const {cart} = this.context;
        return (
            <div>            
                <header className="wow bounceInDown">
                    <a href="#" className="logo logo1">Gym <span>Home</span></a>
                    <div className="toggle" onClick={this.handleToggle}><img src={iconnav} alt="" /></div>
                </header>
                <div className={this.state.isOpen ? "menu-open-opacity" : "overlay"} />
                <nav className={this.state.isOpen ? "over-nav menu-open" : "active-menu overlay"}>
                    <i className="fas fa-times" aria-hidden="true" onClick={this.handleToggle} />
                    <div className="logo logo-width-min">
                        <span className="logo-gym">GYM</span> <span className="logo-home">HOME</span>
                    </div>
                    <div className="nav-middle">
                        <ul>
                        <li><Link to="/" onClick={this.handleToggle}>Trang Chủ</Link></li>
                        <li><Link to="/phong-gym" onClick={this.handleToggle}>Phòng Tập</Link></li>
                        <li><Link to="/Yoga" onClick={this.handleToggle}>YOGA</Link></li>
                        <li><Link to="/Lich-Tap" onClick={this.handleToggle}>Lịch Tập</Link></li>
                        <li><Link to="/HLV-Gym" onClick={this.handleToggle}>HLV gym</Link></li>
                        <li><Link to="/ProductPage2" onClick={this.handleToggle}>Sản Phẩm</Link></li>
                        <li><Link to="/khuyenmai" onClick={this.handleToggle}>Khuyến Mãi</Link></li>
                        <li><Link to="/Lien-he" onClick={this.handleToggle}>Liên hệ</Link></li>
                        </ul>
                        <div className="nav-cart">
                       
                        <Link to="/cart">
                            <img onClick={this.handleToggle} src="https://image.flaticon.com/icons/png/512/536/536473.png" className="image-icon-shopping" alt="" width="20"/>
                            <span >{cart.length}</span>
                        </Link>
                    </div>
                    </div>
                    <div className="nav-right">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fas fa-search" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <i className="fas fa-user" aria-hidden="true" />
                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary btn-primary-login" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.handleToggle}>
                                    Đăng Nhập
                                </button>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-cart" aria-hidden="true" />
                                    <img className="icon-cart" src="img/giohang.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

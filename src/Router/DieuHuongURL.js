import React, { Component } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import ProductPage from '../component/ProductPage';
import ProductPage2 from '../component/ProductPage2'
import HomePage from '../component/Home/HomePage'
import ContentProduct from '../component/ContentProduct/ContentProduct';
import ContentProduct2 from '../component/ShoppingCart/section/Products'
import Yoga from '../component/YogaPage/yoga';
import ProductYogaPage from '../component/YogaHlv/ProductYogaPage';
import PromotionPage from '../component/PtHlv/PromotionPage'
import ProductPtDetail from '../component/PtHlv/ProductPtDetail';
import ProductContentBlog from '../component/YogaBlog/ProductContentBlog';
import RoomGym from '../component/RoomGym/RoomGym';
import PT from '../component/PT/PT';
import Contact from '../component/Contact/Contact'
import LostdatePage from '../component/isotope_LostDate/LostdatePage';
import Boxing from '../component/Boxing';
import Cart from '../component/ShoppingCart/section/Cart';
import OderCart from '../component/ShoppingCart/section/odercart'
// import GymHomePage from '../component/GymHomePage'
// import Admin from '../../../admin-coffe/src/component/App'




class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/Products" component={ProductPage} />
                    <Route exact path="/Yoga" component={Yoga} />
                    <Route exact path="/khuyenmai" component={PromotionPage} />
                    <Route exact path="/phong-gym" component={RoomGym} />
                    <Route exact path="/HLV-Gym" component={PT} />
                    <Route exact path="/Lich-Tap" component={LostdatePage} />
                    <Route exact path="/Lien-he" component={Contact} />
                    <Route exact path="/Boxing" component={Boxing} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/odercart" component={OderCart} />
                    <Route exact path="/ProductPage2" component={ ProductPage2} />
                    {/* <Route exact path="/GymHome" component={GymHomePage} /> */}
                    <Route exact path="/chitiet/:slug.:id" component={ProductPtDetail} />
                    <Route exact path="/BlogYoga/:slug.:id" component={ProductContentBlog} />
                    <Route exact path="/hlvYoga/:slug.:id" component={ProductYogaPage} />
                    <Route exact path="/ContentProduct/:slug.:id" component={ContentProduct} />
                    <Route exact path="/ContentProduct2/:slug.:id" component={ContentProduct2} />

                    {/* <Route exact path="/admin" component={Admin}/> */}
                </Switch>
            </div>
        );
    }
}

export default DieuHuongURL;
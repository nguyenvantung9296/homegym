import React, { Component } from 'react'
import ProductPT01 from './ProductPtItem01';
import DulieuPT from './data-Pt.json';
import './Pt.css'
export default class PtGym extends Component {
    render() {
        return (
            <div>
                <section className="sec-1 sec--pt">
                    <div className="container-fluid">
                        <h2 className="title-decor wow bounceInDown">HLV <span>GymHome</span></h2>
                        <p className="slogan wow bounceInUp" data-wow-delay="0.4s">Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.</p>
                        <div className="row section--hlvpt">
                                 {
                   DulieuPT.map((value,key) =>{
                       return(
                        <ProductPT01 
                        key={key}
                        hlvId={value.id}
                        name={value.name}
                        p={value.p}
                        contentp={value.contentp}
                        image={value.image}
                        image1={value.image1}
                        image2={value.image2}
                        image3={value.image3}
                        />

                       )
                   })
                 }
                        </div>
                    </div>
                </section>

                {/* <section className="s-crossfit-banner">
                   <div className="content-s-crossfit">
                       <h3>ĐĂNG KÝ ĐỂ TRỞ THÀNH COACH</h3>
                       <button>ĐĂNG KÝ</button>
                   </div>
                </section> */}
 
                <a href="#"><i className="fa fa-angle-up back-top" style={{ display: 'none' }} /></a>
                {/*FOODTER*/}
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import PtGym from '../PtHlv/PtGym'
export default class pt extends Component {
    render() {
        return (
            <div>
               
               <div className="banner-Yoga banner-pt-gym">
                    <div class="slider-text">
                        <div class="content-text content-text-boxing wow bounceInUp" data-wow-delay="0.1s">
                            <h4 className="title-yoga">HLV GymHome</h4>
                            <div></div>
                            <Link to="/" className="btn-primary">
                                Trang Chủ
                            </Link>
                        </div>
                    </div>
                </div>
                <PtGym/>

            </div>
        )
    }
}

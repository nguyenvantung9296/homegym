import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Lostdates from './Lostdate';
import {WOW} from 'wowjs';
export default class Lostdate extends Component {
    componentDidMount() {
		const wow = new WOW({
		  offset: 100,
		  mobile: false, 
		  live: true 
		})

		wow.init();
	}
    render() {
        return (
            <div className="father-date">
                  <div className="banner-Yoga banner-lostdate">
                    <div class="slider-text">
                        <div class="content-text content-text-boxing wow bounceInUp" data-wow-delay="0.1s">
                            <h4 className="title-yoga">Lịch Tập</h4>
                            <div></div>
                            <Link to="/" className="btn-primary">
                                Trang Chủ
                            </Link>
                        </div>
                    </div>
                </div>
                <Lostdates />
       
            </div>
        )
    }
}

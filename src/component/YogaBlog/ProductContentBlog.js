import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import DulieuBlogYoga from './data-YogaBlog.json';
import './blogYoga.css';
import BlogItem from './BlogItem'
export default class ProductContentBlog extends Component {
    render() {
        var dem = 1;
        return (
            <div>
                <div className="banner-Yoga banner-Yoga-blog">
                    <div class="slider-text">
                        <div class="content-text content-text-boxing wow bounceInUp" data-wow-delay="0.1s">
                            <h4 className="title-yoga">Blog YogaHome</h4>
                            <div></div>
                            <Link to="/Yoga/" className="btn-primary">
                                Yoga Home
                                </Link>
                        </div>
                    </div>
                </div>

                {
                    DulieuBlogYoga.map((value, key) => {
                        if (value.id === parseInt(this.props.match.params.id)) {//neu value.id trung voi this.props.math.param.id,== la dau so sanh,=== la dong nhat
                            return (
                                <div className="container container-blog " key={key}>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-8 columnLeft">
                                            <div className="post single">
                                                <h2>{value.title} </h2>
                                                <div className="content-wrapper">
                                                    <div className="content content-responsive postContent">
                                                     <div className="class1rf">
                                                         <p> {value.content1} </p>
                                                         <h3 className="namecontent1"> {value.namecontent1} </h3>
                                                         <img src={value.image2} />
                                                         <ul className="ul-blog">
                                                             <li> {value.li1} </li>
                                                             <li> {value.li2} </li>
                                                             <li> {value.li3} </li>
                                                             <li> {value.li4} </li>
                                                             
                                                         </ul>
                                                         <p></p>
                                                     </div>

                                                     <div className="class1rf">
                                                     <h3 className="namecontent1"> {value.namecontent2} </h3>
                                                         <img src={value.image3} />
                                                         <ul className="ul-blog">
                                                             
                                                             <li> {value.li5} </li>
                                                             <li> {value.li6} </li>
                                                             <li> {value.li7} </li>
                                                             <li> {value.li8} </li>
                                                         </ul>
                                                         <p></p>
                                                     </div>


                                                     <div className="class1rf">
                                                     <h3 className="namecontent1"> {value.namecontent3} </h3>
                                                         <img src={value.image4} />
                                                         <ul className="ul-blog">
                                               
                                                             <li> {value.li9} </li>
                                                             <li> {value.li10} </li>
                                                             <li> {value.li11} </li>
                                                             <li> {value.li12} </li>
                                                             
                                                         </ul>
                                                         <p></p>
                                                     </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 columnRight">
                                        <h3 className="namecontent1">Bài viết liên quan</h3>
                                            {
                                                DulieuBlogYoga.map((value, key) => {
                                                    console.log(key)
                                                    if (value.id != this.props.match.params.id) {
                                                        if (dem <= 6) { //bien dem khai bao ben tren cung, co 4 sp tuong ung
                                                            dem++;
                                                            return (
                                                                <BlogItem key={key}
                                                                    hlvId={value.id}
                                                                    name={value.name}
                                                                    price={value.price}
                                                                    contentp={value.contentp}
                                                                    image={value.image}
                                                                    image1={value.image1}
                                                                    image2={value.image2}
                                                                    image3={value.image3}
                                                                    image4={value.image4}

                                                                />
                                                            )
                                                        }
                                                    }
                                                    return;
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                        return;
                    })
                }

         
            </div>
        )
    }
}

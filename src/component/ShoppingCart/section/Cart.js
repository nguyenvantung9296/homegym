import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
// import Colors from './Colors'
import '../css/Details.css'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                   <div className=" banner-productss banner-cart">
                    <div class="slider-text">
                        <div class="content-text wow bounceInUp" data-wow-delay="0.1s">
                        
                        </div>
                    </div>
                </div>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item.id}>
                                <img src={item.image} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h3 className="name-cart">{item.name}</h3>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    {/* <Colors colors={item.colors}/> */}
                                    <p>Khối lượng: {item.size}g</p>
                                    {/* <p>{item.content}</p> */}
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Xóa tất cả</Link>  <Link to="/odercart">Thanh toán</Link>
                        <h3>Tổng tiền: ${total}</h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart

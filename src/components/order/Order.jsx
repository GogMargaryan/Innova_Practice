import React from 'react'
import orderTop from "../../assets/images/OrderImages/order-top.png"
import orderBottom from "../../assets/images/OrderImages/order-bottom.png"
import { useSelector } from 'react-redux'
import "./Order.scss"

const Order = () => {
    const orderData = useSelector((state) => state.order)
    console.log(orderData);
    return (
        <section className='order-section'>
            <img src={orderTop} className='top' alt="Order Top" />
            <div className='order'>
                <div className="order-main">
                    {
                        orderData.order.map(({header, title, icon}, index) => {
                            return (
                                <div key={index} className='order-main-card'>
                                    <img src={icon} alt="Icon" className='icon' /> 
                                    <h1>{header}</h1>
                                    <span>{title}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <img className='bottom' src={orderBottom} alt="Order Bottom" />    
        </section>
  )
}

export default Order
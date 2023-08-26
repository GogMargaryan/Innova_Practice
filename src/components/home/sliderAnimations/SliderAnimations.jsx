import React, { useState } from 'react'
import { animationSliderData } from '../../../animationSliderData'
import "./SliderAnimation.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//Background Image

const SliderAnimations = () => {

    const [isDragging, setIsDragging] = useState(false);

  return (
    <section>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={500}
        slidesPerView={1}
        navigation
        speed = {1000}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="slider"
        >
            {animationSliderData.map(({pizza, potherb1, potherb2, potherb3, tomato1, tomato2, onion1, onion2, onion3, paper1, paper2, header, headerSequel, title }, index) => {
                return (
                <SwiperSlide key={index} className={`slider-page-${index + 1}  slider-page`}>
                    <div className={`slider-page-${index + 1}-title`}>
                        <h1>{header}<span style={{color: "var(--bs-orange)"}}>OO</span>{headerSequel}</h1>
                        <h5>{title}</h5>
                    </div>
                    <div className={`slider-page-${index + 1}-interface`}>
                        {pizza && <img className='pizza' src={pizza} alt="pizza" />}
                        {potherb1 && <img className='pizzasComponents potherb1' src={potherb1} alt="potherb" />}
                        {potherb2 && <img className='pizzasComponents potherb2' src={potherb2} alt="potherb" />}
                        {potherb3 && <img className='pizzasComponents potherb3' src={potherb3} alt="potherb" />}
                        {tomato1 && <img className='pizzasComponents tomato1' src={tomato1} alt="tomato" />}
                        {tomato2 && <img className='pizzasComponents tomato2' src={tomato2} alt="tomato" />}
                        {onion1 && <img className='pizzasComponents onion1' src={onion1} alt="onion" />}
                        {onion2 && <img className='pizzasComponents onion2' src={onion2} alt="onion" />}
                        {onion3 && <img className='pizzasComponents onion3' src={onion3} alt="onion" />}
                        {paper1 && <img className='pizzasComponents paper1' src={paper1} alt="paper" />}
                        {paper2 && <img className='pizzasComponents paper2' src={paper2} alt="paper" />}
                    </div>
                </SwiperSlide>
                )
            })}   
        </Swiper>
    </section>
  )
}

export default SliderAnimations
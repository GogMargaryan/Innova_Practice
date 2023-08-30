// import React, { useRef, useState } from "react";
// Import Swiper React components
import { BestChefData } from './BestChefData'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import { Autoplay, Pagination, Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './BestChefSlider.scss'
import 'swiper/css'

const BestChefSlider = () => {
  return (
    <div className='BestChefSlider'>
      <section className='BestChefSlider-Section'>
        <p className='BestChefSlider-textOne'>Meet our experts</p>
        <p className='BestChefSlider-textTwo'>Our Best Chef</p>
        <div>
          <Swiper
          // modules={[Navigation,Pagination,Autoplay]}
          //   loop={true}
          //   slidesPerView={4}
          //   autoplay={{delay: 2000}}
          //   navigation
          //   freeMode= {true}
          //   pagination
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          // spaceBetween={500}
          slidesPerView={4}
          navigation
          speed = {1000}
          autoplay={{ delay: 2000 }}
          loop={true}
          >
            {BestChefData.map(({ id, title, name, photo }) => (
              <SwiperSlide key={id}>
                <div id={id} className='BestChefSlider-Section-Chefs'>
                  <img alt={title} src={photo} />
                  <div>
                  <nav>
                    <p className='BestChefSlider-Section-Chefs-Name'>{name}</p>
                    <p className='BestChefSlider-Section-Chefs-Chef'>{title}</p>
                  </nav>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default BestChefSlider

import React from "react";
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        avatar: AVTR1,
        name: `Nurgasy Sapalov`,
        review: `Modi alias animi doleram aliquam ea eum beatea maiores, consectetur praesentium qiubusdam, commodi velit porro
        blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
        deserunt explicabo nostrum ducimus quasi?`
    },
    {
        avatar: AVTR2,
        name: `Syimyk Joldoshbekov`,
        review: `Modi alias animi doleram aliquam ea eum beatea maiores, consectetur praesentium qiubusdam, commodi velit porro
        blanditiis consequatur qui molestiae.Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
        deserunt explicabo nostrum ducimus quasi?`
    },
    {
        avatar: AVTR3,
        name: `Somon Ikromov`,
        review: `Modi alias animi doleram aliquam ea eum beatea maiores, consectetur praesentium qiubusdam, commodi velit porro
        blanditiis consequatur qui molestiae.Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
        deserunt explicabo nostrum ducimus quasi?`
    },
    {
        avatar: AVTR4,
        name: `Datka Jyrgalbekov`,
        review: `Modi alias animi doleram aliquam ea eum beatea maiores, consectetur praesentium qiubusdam, commodi velit porro
        blanditiis consequatur qui molestiae.Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
        deserunt explicabo nostrum ducimus quasi?`
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
                // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review},index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client_avatar">
                                    <img src={avatar}/>
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client_review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
export default Testimonials
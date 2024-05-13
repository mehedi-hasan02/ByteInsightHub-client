import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import image1 from '../../assets/banner1.jpg'
import image2 from '../../assets/banner2.jpg'
import image3 from '../../assets/banner3.jpg'

const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='px-1 md:px-2'>
                    <Slide image={image1}
                        text='Discover the transformative power of AI robots, shaping industries and driving innovation towards a future of limitless potential and unprecedented efficiency'
                    >
                    </Slide>
                </SwiperSlide>
                <SwiperSlide className='px-1 md:px-2'>
                    <Slide image={image2}
                    text='Embrace the future with AI robots, pioneers of innovation reshaping industries worldwide, offering unparalleled efficiency and unlocking endless possibilities for tomorrow advancements.'
                    >
                    </Slide>
                </SwiperSlide>
                <SwiperSlide className='px-1 md:px-2'>
                    <Slide
                    image={image3}
                    text='Embark on a journey into the future with AI-powered robots, catalysts of innovation transforming industries and unlocking boundless potential for tomorrows advancements and unparalleled efficiency.'
                    >

                    </Slide>
                    </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Carousel;
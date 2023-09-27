import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { Link } from 'react-router-dom';
import { fetchLimitedProducts } from '../store/features/slider/sliderSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
    const limitedProducts = useAppSelector(state => state.limitedProduct);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchLimitedProducts())
      }, [dispatch])

    return (
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation, Autoplay ]}
        className="swiper"
        >
            {limitedProducts.products.map(item => (
                <SwiperSlide key={item.id} className='swiper-item'>
                    <div  className="swiper-item__img-wrapper">
                        <img src={item.image} alt="product-img" className="swiper-item__product-img" />
                    </div>
                    <div className="swiper-item__info-wrapper">
                        <h4 className="swiper-item__product-name">
                            {item.title}
                        </h4>
                        <p className="swiper-item__product-description">
                            {item.description}
                        </p>
                        <Link to={`/product/${item.id}`} className='swiper-item__product-link' >
                            See More
                        </Link>
                    </div>
                </SwiperSlide> 
            ))}         
        </Swiper>
    )
}

export default Slider
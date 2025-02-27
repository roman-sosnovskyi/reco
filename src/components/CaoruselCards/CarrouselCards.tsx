import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { products } from "@/constants/products";

const Carousel = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView={3}
      spaceBetween={-100}
      coverflowEffect={{
        rotate: 0,
        stretch: 100,
        depth: 200,
        modifier: 1,
        slideShadows: false
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="product-carousel"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="slide">
          <img src={product.photo} alt={product.name} className="slide-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

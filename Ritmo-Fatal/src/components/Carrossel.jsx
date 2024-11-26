// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";
// import images from "../data/makingOffDados.json"
// export default function Carrossel() {
//   return (
//     <div className="flex">
//         <Swiper>
//             {
//                 images.map((img, index) => (
//                     <SwiperSlide key={index}>
//                         <img src={img.imagem} />
//                     </SwiperSlide>
//                 ))
//             }
//         </Swiper>
//     </div>
//   )
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../data/makingOffDados.json";

const Carousel = () => {
  return (
    <>
      <div className="w-full p-10 hidden tablet:flex items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={1}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.imagem}
                className="w-[280px] h-[210px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="w-full p-10 flex tablet:hidden items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.imagem}
                className="w-[280px] h-[210px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  );
};

export default Carousel;


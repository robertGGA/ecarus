import {Navigation, Pagination} from "swiper";
import SliderElement from "./sliderElement/SliderElement";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import './sliderStyles.sass';
import {useState} from "react";

const Slider = () => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
    return(
        <>
        <Swiper
            modules={[ Navigation, Pagination]}
            spaceBetween={30}
            navigation={{
                prevEl,
                nextEl
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <SliderElement title={'Сделаем мир чище'} info={'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов'} color={'#B3EDC8'} btnInfo={'Условия сервиса'} imgNumber={1}/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderElement title={'А вы знали...'} info={'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? '} color={'#FFE48F'} btnInfo={'Узнать больше'} imgNumber={2}/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderElement title={'Что с масками?'} info={'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.'} color={'#BFF0DE'} btnInfo={'Пункты сбора масок'} imgNumber={3}/>
            </SwiperSlide>
        </Swiper>
            <div className={'btn-container'}>
                <div className={'btn-prv'} ref={(node) => setPrevEl(node)}/>
                <div className={'btn-next'} ref={(node) => setNextEl(node)}/>
            </div>
        </>
    );
}
export default Slider;
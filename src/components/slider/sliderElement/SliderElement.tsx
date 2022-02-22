import './sliderElementStyles.sass';
import firstImage from '../../../assets/imgs/recycling-concept-flat-lay 2 2.svg';
import secondImage from '../../../assets/imgs/secondSlide.svg';
import thirdImage from '../../../assets/imgs/thirdSlide.svg';
import {FC} from "react";
interface SliderElementProps {
    title: string,
    color: string,
    info: string,
    imgNumber: number,
    btnInfo: string
}

const SliderElement: FC<SliderElementProps> = ({title, color, info, imgNumber, btnInfo}) => {
    let image: string = '';

    switch (imgNumber) {
        case 1:
            image = firstImage;
            break;
        case 2:
            image = secondImage;

            break;
        case 3:
            image = thirdImage;
            break;
    }


    return(
        <div style={{"backgroundColor": `${color}`}} className={'slider-element-container'}>
            <div className={'slider-element-container-wrapper'}>
                <div className={'slider-element-content-container'}>
                    <h1>{title}</h1>
                    <div className={'slider-content-info'}>
                        <p>{info}</p>
                    </div>

                    <button className={'button-slider-element'}>
                        <p>{btnInfo}</p>
                    </button>
                </div>
                <img src={image}/>
            </div>
        </div>
    );
}

export default SliderElement;
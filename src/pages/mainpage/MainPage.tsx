import './mainPageStyles.sass';
import MainPageCard from "../../components/card/MainPageCard";
import Slider from "../../components/slider/Slider";

const MainPage = () => {
    return(
        <div className={'main-container'}>
            <Slider/>
            <div className={'cards-container'}>
                <MainPageCard title={'Пункты сбора'} svgname={'first-card-svg'} info={'Посмотри, где в твоем городе можно сдать вторсырье на переработку'} width={315} height={225}/>
                <MainPageCard title={'Эко маркет'} svgname={'second-card-svg'} info={'Используй заработанные экокоины для покупки товаров из переработанных материалов'} width={254} height={254}/>
            </div>
        </div>
    )
};


export default MainPage;
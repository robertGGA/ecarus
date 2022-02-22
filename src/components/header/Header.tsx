import './headerStyles.sass'
import {Link} from "react-router-dom";
import Icon from "../other/Icon";
import logo from '../../assets/EcorusLogo.svg';

const Header = () => {
    return(
        <header>
            <div className={'header-container'}>
                <div className={'header-container-section'}>
                    <img className={'logo'} src={logo} alt={'logo'}/>
                    <nav>
                        <Link to={'/'}>Главная</Link>
                        <Link to={'/'}>Пункты сбора</Link>
                        <Link to={'/'}>ЭкоМаркет</Link>
                        <Link to={'/'}>О сервисе</Link>
                    </nav>
                </div>

                <div className={'header-container-section'}>
                    <button>
                        <Icon width={20} height={20} name={'city-icon'}/>
                        <p>
                            Казань
                        </p>
                    </button>

                    <button>
                        <Icon name={'sign-in'} width={20} height={20}/>
                        <p>
                            Войти
                        </p>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
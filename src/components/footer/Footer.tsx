import './footerStyles.sass';
import Icon from "../other/Icon";

const Footer = () => {
    return(
      <footer>
          <div className={'footer-container'}>
              <div className={'footer-content-container'}>
                <Icon name={'email-svg'} width={20} height={20}/>
                  <p>
                      info@ecorus.ru
                  </p>
              </div>

              <div className={'footer-content-container'}>
                  <Icon name={'call-svg'} width={20} height={20}/>
                  <p>
                      +7 (800) 880-88-88
                  </p>
              </div>
          </div>
      </footer>
    );
}

export default Footer;
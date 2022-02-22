import {FC} from "react";
import './cardsStyles.sass';
import Icon from "../other/Icon";

interface MPCardProps {
    svgname: string,
    title: string,
    info: string,
    width: string | number,
    height: string | number
}

const MainPageCard: FC<MPCardProps> = ({svgname, title, info, width, height}) => {
    let style: number = 0
    if (svgname == "first-card-svg") {
        style = 22;
    }
    return(
      <div className={'mainpage-card-container'}>
          <div>
              <h2>{title}</h2>
              <div className={'info-container'}>
                <p>{info}</p>
              </div>
              <button className={'button-mpcard-settings'}>
                  <Icon name={"button-card-arrow"} width={24} height={24}/>
              </button>
          </div>
          <div style={{'marginTop': style}} className={'svg-container'}>
            <Icon name={svgname} width={width} height={height}/>
          </div>
      </div>
    );
}

export default MainPageCard;
import Header from "../header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";
import './layoutStyles.sass';

const NonAuthLayout = () => {
    return(
      <div className={'wrapper'}>
          <Header/>
          <main>
            <Outlet/>
          </main>
      </div>
    );
}

export default NonAuthLayout;
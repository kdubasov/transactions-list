import React from "react";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

//store
import store from './store'
import {Provider} from "react-redux";
import NavbarTop from "../widgets/NavbarTop";
import {BrowserRouter} from "react-router-dom";

interface IProps {
   children: React.ReactNode
}

const Providers = ({ children }: IProps) => {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <NavbarTop />
            {children}
         </Provider>
      </BrowserRouter>
   );
};

export default Providers;
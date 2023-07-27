import {Fragment} from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    return (
        <Fragment>
            <Header/>
            <Navigation/>
            <main>{props.children}</main>
            <Footer/>
        </Fragment>
    );
};

export default Layout;

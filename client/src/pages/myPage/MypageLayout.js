import React from "react";
import MyNav from "./MyPageNav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MyLayout = ({children,choose, history}) =>{
    return (<>
        <Header />
        <div className="container">
            <MyNav choose={choose} history={history}/>
            {children}
        </div>
        <Footer />
    </>);
}

export default MyLayout;


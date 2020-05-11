import React from "react";
import MyNav from "./MyPageNav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MyLayout = ({children,choose}) =>{
    let choos = "내 정보 수정";
    return (<>
        <Header />
        <div className="container">
            <MyNav choose={choos}/>
            {children}
        </div>
        <Footer />
    </>);
}

export default MyLayout;


import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SheredPage/Navbar";
import Footer from "../Pages/SheredPage/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
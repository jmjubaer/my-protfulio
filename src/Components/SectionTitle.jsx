import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// eslint-disable-next-line react/prop-types
const SectionTitle = ({subHeading,firstHeading,lastheading}) => {
    useEffect(() =>{
        AOS.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            // delay: 0,
        })
    },[])
    return (
        <div data-aos="zoom-in" className="text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold">{firstHeading && firstHeading} <span className="gradient_text jm_special_font">{lastheading}</span></h2>
            <p className="mt-5 text-lg">------ {subHeading} ------</p>
            <div className="absolute w-20 h-1 bg_gradient -bottom-3 left-1/2 -translate-x-1/2"></div>
        </div>
    );
};

export default SectionTitle;
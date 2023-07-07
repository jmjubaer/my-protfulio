import SectionTitle from "../../Components/SectionTitle";
import image1 from "../../assets/service/1.jpg";
import image2 from "../../assets/service/2.jpg";
import image3 from "../../assets/service/3.jpg";
import image4 from "../../assets/service/4.jpg";
import image5 from "../../assets/service/5.jpg";
import image6 from "../../assets/service/6.jpg";
const Service = () => {
    return (
        <div id="service" className="pt-28 jm_container overflow-hidden">
            <SectionTitle
                firstHeading={"My"}
                lastheading={"Services"}
                subHeading={"Explore my services"}
            ></SectionTitle>
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div data-aos="fade-right" className="card card-compact shadow-xl border">
                    <figure>
                        <img
                            src={image6}
                            alt="Service Image"
                            className="w-full object-cover h-52"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Front-End Developer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="card card-compact shadow-xl border">
                    <figure>
                        <img
                            src={image5}
                            alt="Service Image"
                            className="w-full object-cover h-52"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">MERN stack Developer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div  data-aos="fade-left" className="card card-compact shadow-xl border">
                    <figure>
                        <img
                            src={image1}
                            alt="Service Image"
                            className="w-full object-cover h-52"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">PSD to HTML</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div data-aos="fade-right" className="card card-compact shadow-xl border">
                    <figure>
                        <img
                            src={image2}
                            alt="Service Image"
                            className="w-full object-cover h-52"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Figma to HTML</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="card card-compact shadow-xl border">
                    <figure>
                        <img
                            src={image3}
                            alt="Service Image"
                            className="w-full object-cover h-52"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Figma to React</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div  data-aos="fade-left" className="card card-compact shadow-xl border">
                    <figure>
                        <img
                            src={image4}
                            alt="Service Image"
                            className="w-full object-cover h-52"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">PSD to React</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;

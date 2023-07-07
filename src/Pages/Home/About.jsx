import Button from "../../Components/Button";
import image from "./../../assets/my-image-2.png"
const About = () => {
    return (
        <div id="about" className="grid md:grid-cols-5 overflow-hidden gap-14 jm_container items-center pt-28 md:pt-0">
            <div data-aos="fade-right" className="rounded-full mx-auto w-4/5 md:w-full bg_gradient col-span-2">
                <img className="rounded-full w-[90%] h-[70vw] m-[5%] md:w-11/12 md:h-[32vw] md:m-[4.3%] bg-white object-cover" src={image} alt="" />
            </div>
            <div data-aos="fade-left" className="md:col-span-3">
                <h2 className="text-6xl font-semibold">About 
                <span className="jm_special_font gradient_text ml-5">Me</span></h2>
                <h3 className="mt-1 text-xl font-semibold">I am a Front End Developer</h3>
                <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut qui ratione unde veniam eaque fugit iure doloremque quibusdam tempore magnam eum facilis, illo earum nulla architecto officiis. Animi nobis qui sequi, consectetur quisquam ex quo laboriosam quis facilis. Molestias, voluptates ad id eveniet veniam officia possimus enim nisi repudiandae modi.</p>
                <Button>About Me</Button>
            </div>
        </div>
    );
};

export default About;
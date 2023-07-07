/* eslint-disable react/jsx-no-target-blank */
import SectionTitle from "../../Components/SectionTitle";
import image1 from "../../assets/projects/Music-hub.png";
import image2 from "../../assets/projects/Jm-Toy-Mart.png";
import image3 from "../../assets/projects/Jm-recipest.png";
import Button from "../../Components/Button";
const Projects = () => {
    return (
        <div id="project" className="pt-28 jm_container">
            <SectionTitle
                firstHeading={"My"}
                lastheading={"Projects"}
                subHeading={"Explore my awesome project"}
            ></SectionTitle>

            <div className="grid md:grid-cols-5 gap-10 items-center mt-14">
                <div data-aos="fade-right" className="md:col-span-3">
                    <h2 data-aos="fade-up" className="text-5xl font-semibold">Music Hub</h2>
                    <p data-aos="fade-up" className="text-xl font-medium mt-2 text-[#1C99FE]">
                        MERN Project
                    </p>
                    <h3 data-aos="fade-up" className="text-2xl mt-8 font-semibold">Features:</h3>
                    <div className="text-lg">
                        <li data-aos="fade-up">This is course selling Project</li>
                        <li data-aos="fade-up">
                            A user can select a curse and also can enrolled this
                            curse. After confirm payment complete enrolled.
                        </li>
                        <li data-aos="fade-up">
                            This site has awesome dashboard. It changes base on
                            the user role,
                        </li>
                        <li data-aos="fade-up">
                            f a user is Admin he can make a user admin or
                            instructor and he also can approve/denied the course
                            which add the instructor
                        </li>
                        <li data-aos="fade-up">
                            If a user is instructor he can add a course and he
                            also show his all courses which he added.
                        </li>
                        <li data-aos="fade-up">
                            This site also has theme system. A user can toggle
                            theme in light?dark.
                        </li>
                    </div>
                    <div data-aos="fade-up" className="flex flex-wrap md:flex-nowrap gap-5 justify-between mt-5">
                        <Button>
                            <a target="_blank" href="https://music-hub-8cb59.web.app/">
                                Live Site
                            </a>
                        </Button>
                        <Button>
                            <a
                                target="_blank"
                                href="https://github.com/jmjubaer/music-hub-client"
                            >
                                Clint Code
                            </a>
                        </Button>
                        <Button>
                            <a
                                target="_blank"
                                href="https://github.com/jmjubaer/music-hub-server"
                            >
                                Server Code
                            </a>
                        </Button>
                    </div>
                    <p></p>
                </div>
                <div data-aos="fade-left" className="md:col-span-2 h-[60vh] md:h-full w-[80vw] md:w-full mx-auto relative jm_parent overflow-hidden border-4 border_gradient">
                    <div className="absolute w-full h-fit top-0 left-0 jm_child">
                        <img
                            className="w-full h-full jm_transition"
                            src={image1}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-5 gap-10 items-center mt-14">
                <div data-aos="fade-left" className="md:col-span-3 md:order-2">
                    <h2 data-aos="fade-up" className="text-5xl font-semibold">Toy Mart</h2>
                    <p data-aos="fade-up" className="text-xl font-medium mt-2 text-[#1C99FE]">
                        MERN Project
                    </p>
                    <h3 data-aos="fade-up" className="text-2xl mt-8 font-semibold">Features:</h3>
                    <div data-aos="fade-up" className="text-lg">
                        <li data-aos="fade-up">This is toy selling Project</li>
                        <li data-aos="fade-up">
                        In Products section you can short product by category and you can also show the product description by clicking on the details button
                        </li>
                        <li data-aos="fade-up">
                        You can also show all products in <b>All toy</b> Page.
                        </li>
                        <li data-aos="fade-up">
                        In <b>All toy</b> page you can search Product
                        </li>
                        <li data-aos="fade-up">
                        If you want to add products, this website also has a <b>Add Toy</b> page
                        </li>
                        <li data-aos="fade-up">
                        In My Toy page you can show your all added products and you can update or delete your products.
                        </li>
                    </div>
                    <div data-aos="fade-up" className="flex flex-wrap md:flex-nowrap gap-5 justify-between mt-5">
                        <Button>
                            <a target="_blank" href="https://jm-toy-hub.web.app/">
                                Live Site
                            </a>
                        </Button>
                        <Button>
                            <a
                                target="_blank"
                                href="https://github.com/jmjubaer/toy-mart-client"
                            >
                                Clint Code
                            </a>
                        </Button>
                        <Button>
                            <a
                                target="_blank"
                                href="https://github.com/jmjubaer/toy-mart-server"
                            >
                                Server Code
                            </a>
                        </Button>
                    </div>
                </div>
                <div data-aos="fade-right" className="md:col-span-2 md:order-1 h-[60vh] md:h-full w-[80vw] md:w-full mx-auto relative jm_parent overflow-hidden border-4 border_gradient">
                    <div className="absolute w-full h-fit top-0 left-0 jm_child">
                        <img
                            className="w-full h-full jm_transition"
                            src={image2}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-5 gap-10 items-center mt-14">
                <div data-aos="fade-right" className="md:col-span-3">
                    <h2 data-aos="fade-up" className="text-5xl font-semibold">JM Recipest</h2>
                    <p data-aos="fade-up" className="text-xl font-medium mt-2 text-[#1C99FE]">
                        Front-end Project
                    </p>
                    <h3 data-aos="fade-up" className="text-2xl mt-8 font-semibold">Features:</h3>
                    <div data-aos="fade-up" className="text-lg">
                        <li data-aos="fade-up">This is Restaurant Project</li>
                        <li data-aos="fade-up">
                        In homepage has chef information and popular recipes
                        </li >
                        <li data-aos="fade-up">
                        When hover the chef image it show some information about the chef and a view recipe button
                        </li>
                        <li data-aos="fade-up">
                        When Click view recipe button it go to the recipe page. This page contains this chef information and his some recipe information (Like the recipe cooking method, recipe rating and Ingredients). There also has a favorite button
                        </li>
                        <li data-aos="fade-up">
                        You can not show the recipe information unless you login this site
                        </li>
                    </div>
                    <div data-aos="fade-up" className="flex flex-wrap md:flex-nowrap gap-5 justify-between mt-5">
                        <Button>
                            <a target="_blank" href="https://jm-recipest.web.app/">
                                Live Site
                            </a>
                        </Button>
                        <Button>
                            <a
                                target="_blank"
                                href="https://github.com/jmjubaer/jm-recipest-client"
                            >
                                Clint Code
                            </a>
                        </Button>
                        <Button>
                            <a
                                target="_blank"
                                href="https://github.com/jmjubaer/jm-recipest-server"
                            >
                                Server Code
                            </a>
                        </Button>
                    </div>
                </div>
                <div data-aos="fade-left" className="md:col-span-2 h-[60vh] md:h-full w-[80vw] md:w-full mx-auto relative jm_parent overflow-hidden border-4 border_gradient">
                    <div className="absolute w-full h-fit top-0 left-0 jm_child">
                        <img
                            className="w-full h-full jm_transition"
                            src={image3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

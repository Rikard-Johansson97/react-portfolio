import javascript from "../assets/img/JsIcon.png";
import react from "../assets/img/ReactIcon.png";
import node from "../assets/img/NodeIcon.png";
import css from "../assets/img/CssIcon.png";
import mongoDb from "../assets/img/MongoDbIcon.png";
import git from "../assets/img/Git.png";
import redux from "../assets/img/ReduxIcon.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/profile-edit.png";
import arrow2 from "../assets/img/profile-edit.png";
import colorSharp from "../assets/img/skillsBg.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className='skill' id='skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='skill-bx wow zoomIn'>
                            <h2>Skills</h2>
                            <p>
                                I have under the past year learned me the skills
                                below.
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className='owl-carousel owl-theme skill-slider'>
                                <div className='item'>
                                    <img src={javascript} alt='Image' />
                                    <h5>Javascript</h5>
                                </div>
                                <div className='item'>
                                    <img src={react} alt='Image' />
                                    <h5>React</h5>
                                </div>
                                <div className='item'>
                                    <img src={node} alt='Image' />
                                    <h5>Node.js</h5>
                                </div>
                                <div className='item'>
                                    <img src={css} alt='Image' />
                                    <h5>CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={mongoDb} alt='Image' />
                                    <h5>Mongo DB</h5>
                                </div>
                                <div className='item'>
                                    <img src={git} alt='Image' />
                                    <h5>Git</h5>
                                </div>
                                <div className='item'>
                                    <img src={redux} alt='Image' />
                                    <h5>Redux</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

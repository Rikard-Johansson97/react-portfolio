import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile-with-stroke-purple.png";
import facebook from "../assets/img/facebook.png";
import youtube from "../assets/img/youtube.png";
import github from "../assets/img/github.png";
import instagram from "../assets/img/instagram.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Dev", "React Dev", "JavaScript Dev"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='aligh-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <span className='tagline'>
                                Welcome to my Portfolio
                            </span>
                            <h1>
                                {`I'm Rikard a`}{" "}
                                <span
                                    className='txt-rotate'
                                    dataPeriod='1000'
                                    data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                                    <span className='wrap'>{text}</span>
                                </span>
                            </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div>
                            <img-container className='header-img-container'>
                                <div className='icon-container'>
                                    <div className='social-icon-circle'>
                                        <img
                                            className='social-icon'
                                            src={facebook}
                                            alt='social-icon'></img>
                                    </div>
                                    <div className='social-icon-circle'>
                                        <img
                                            className='social-icon'
                                            src={youtube}
                                            alt='social-icon'></img>
                                    </div>
                                    <div className='social-icon-circle'>
                                        <img
                                            className='social-icon'
                                            src={github}
                                            alt='social-icon'></img>
                                    </div>
                                    <div className='social-icon-circle'>
                                        <img
                                            className='social-icon'
                                            src={instagram}
                                            alt='social-icon'></img>
                                    </div>
                                    <img
                                        src={headerImg}
                                        alt='Header Img'
                                        className='header-profile'
                                    />
                                </div>
                            </img-container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

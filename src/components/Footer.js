import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/AvatarMaker.png";
import GitHubIcon from "../assets/img/github.png";
import InstagramIcon from "../assets/img/instagram.png";
import YouTubeIcon from "../assets/img/youtube.png";
import LinkedIn from "../assets/img/linkedIn.png";

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col size={12} sm={6}>
                        <img src={logo} alt='Logo' className='footer-avatar' />
                    </Col>
                    <Col size={12} sm={6} className='text-center text-sm-end'>
                        <div className='footer-social-icon'>
                            <a href='https://github.com/Rikard-Johansson97'>
                                <img src={GitHubIcon} alt='Icon' />
                            </a>
                            <a href='https://www.instagram.com/rikardjohhan/'>
                                <img src={InstagramIcon} alt='Icon' />
                            </a>
                            <a href='https://www.youtube.com/channel/UCTKBGC0USh2tpH0b0OdZi9w'>
                                <img src={YouTubeIcon} alt='Icon' />
                            </a>
                            <a href='https://www.youtube.com/channel/UCTKBGC0USh2tpH0b0OdZi9w'>
                                <img src={LinkedIn} alt='Icon' />
                            </a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

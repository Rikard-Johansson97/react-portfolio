import GitHubIcon from "../assets/img/github.png";
import InstagramIcon from "../assets/img/instagram.png";
import YouTubeIcon from "../assets/img/youtube.png";
import LinkedIn from "../assets/img/linkedIn.png";

export const Footer = () => {
    return (
        <footer className='footer'>
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
        </footer>
    );
};

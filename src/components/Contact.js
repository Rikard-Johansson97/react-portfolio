import email from "../assets/img/email-icon.png";
import adress from "../assets/img/adress-icon.png";
import number from "../assets/img/phone-icon.png";

const Contact = () => {
    return (
        <div className='contact-container' id='contact'>
            <h2>Contact Me</h2>
            <p className='contact-info'>
                If you are interested in hiring me, please contact me via email
                or phone. I look forward to hearing from you and discussing how
                I can help.
            </p>
            <div className='contact-item-container'>
                <div className='contact-item'>
                    <img
                        className='contact-icon'
                        src={adress}
                        alt='contact-icon'></img>
                    <h3 className='contact-title'>ADRESS</h3>
                    <p className='contact-text'>Halland, Varberg</p>
                </div>
                <div className='contact-item'>
                    <img
                        className='contact-icon'
                        src={email}
                        alt='contact-icon'></img>
                    <h3 className='contact-title'>EMAIL</h3>
                    <p className='contact-text'>
                        rikard.johansson.1997@gmail.com
                    </p>
                </div>
                <div className='contact-item'>
                    <img
                        className='contact-icon'
                        src={number}
                        alt='contact-icon'></img>
                    <h3 className='contact-title'>PHONE</h3>
                    <p className='contact-text'>+46-708 47 66 66</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;

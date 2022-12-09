import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, websiteUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <a href={websiteUrl} target='blank'>
                <div className='proj-imgbx'>
                    <img src={imgUrl} alt='project-img' />
                    <div className='proj-txtx'>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    );
};

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/sortVizulizer.png";
import projImg2 from "../assets/img/E-commrence.png";
import projImg3 from "../assets/img/wetaherApp.png";
import colorSharp2 from "../assets/img/profile-edit.png";
import "animate.css";

export const Projects = () => {
    const projects = [
        {
            title: "sort visualizer",
            description: "Sorting Algorithms",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Projects</h2>
                            <p>Skriv om dina project här!</p>
                            <Row>
                                {projects.map((project, index) => {
                                    return (
                                        <ProjectCard key={index} {...project} />
                                    );
                                })}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img
                className='background-image-right'
                alt='bg-img'
                src={colorSharp2}></img>
        </section>
    );
};

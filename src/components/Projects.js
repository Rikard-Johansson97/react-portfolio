import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/sortVizulizer.png";
import projImg2 from "../assets/img/E-commrence.png";
import projImg3 from "../assets/img/wetaherApp.png";
import colorSharp2 from "../assets/img/profile-edit.png";
import "animate.css";

export const Projects = () => {
    const projects = [
        {
            title: "Sort Visualizer",
            description: "Sorting Algorithms",
            imgUrl: projImg1,
            websiteUrl: "https://resonant-sherbet-9c964f.netlify.app/",
        },
        {
            title: "E-Commerce",
            description: "Design & Development",
            imgUrl: projImg2,
            websiteUrl: "https://fancy-bubblegum-b49771.netlify.app/",
        },
        {
            title: "Weather Cast",
            description: "API & Design",
            imgUrl: projImg3,
            websiteUrl: "https://precious-treacle-5ec4c8.netlify.app/",
        },
    ];

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Projects</h2>
                            <p>
                                I have worked on a variety of projects involving
                                JavaScript, React, Node.js, CSS, MongoDB, Git,
                                and Redux. I have used these technologies to
                                create web applications with a modern design,
                                efficient user experience, and secure database
                                integration. I have experience with back-end
                                development, creating database schemas and APIs
                                to facilitate communication between the server
                                and the front-end. I have also developed
                                front-end applications using React, Redux, and
                                other libraries to create interactive UIs. I
                                have written code to utilize the Node.js
                                server-side runtime environment to create APIs
                                and database interactions. Additionally, I have
                                worked with MongoDB, a NoSQL database, to store
                                and retrieve data for web applications. I have
                                also leveraged Git for version control and
                                collaborated on projects with other developers.
                            </p>
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

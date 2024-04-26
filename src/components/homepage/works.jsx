import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";

// Importing images
import folio3 from './assets/folio3.jpeg';
import internspk from './assets/internspk.jpeg'
import spark from './assets/spark.png';
import letsgrow from './assets/letsgrow.jpeg'
import verge1 from './assets/verge1.jpeg'
// Additional work experience data
const experienceData = [
    {
        company: "Verge Systems Pvt. Ltd.",
        position: "React.js Developer Intern",
        duration: "Present",
        description: "Currently working as a React.js Developer Intern at Verge Systems in Hyderabad, Pakistan. Contributing to the development of web applications using React.js technology. Gaining valuable experience in front-end development and collaborating with a team of skilled developers."
      },
    {
        company: "Folio3 Software",
        position: "Web Development Intern",
        duration: "June 2022 - August 2022",
        description: "Participated in a web development internship, working closely with a team of developers to contribute to the creation of web applications. Acquired hands-on experience in the entire software development lifecycle. Handled the Database and created a responsive front-end using HTML, CSS, and JavaScript."
    },
    {
        company: "Interns Pakistan",
        position: "Frontend Development Intern",
        duration: "May 2022 - June 2022",
        description: "Collaborated on multiple projects focusing on front-end development. Utilized a combination of HTML, CSS, and JavaScript to build dynamic and engaging web applications. Implemented responsive design principles to ensure websites function seamlessly across various devices and screen sizes. Employed CSS media queries and flexible layouts to create adaptable and visually consistent experiences."
    },
    {
        company: "The Sparks Foundation",
        position: "Web Development and Designing Intern",
        duration: "July 2022 - August 2022",
        description: "Developed interactive web applications using modern web technologies. Collaborated closely with designers and backend developers to implement UI/UX designs. Participated in code reviews and quality assurance processes."
    },
    {
        company: "LetsGrowMore",
        position: "Web Development Intern",
        duration: "January 2022 - February 2022",
        description: "Developed websites using HTML, CSS, and JavaScript. Implemented responsive design principles to ensure an optimal user experience."
    }
];

const Works = () => {
    return (
        <div className="works">
            <Card
                icon={faBriefcase}
                title="Work Experience"
                body={
                    <div className="works-body">
                        {experienceData.map((work, index) => (
                            <div className="work" key={index}>
                                {/* Using dynamic image source based on the work experience */}
                                {getWorkImage(work.company) && (
                                    <img
                                        src={getWorkImage(work.company)}
                                        alt={work.company}
                                        className="work-image"
                                    />
                                )}
                                <div className="work-title">{work.company}</div>
                                <div className="work-subtitle">{work.position}</div>
                                <div className="work-duration">{work.duration}</div>
                                {/* Adding the new field */}
                                <div className="work-description">{work.description}</div>
                            </div>
                        ))}
                    </div>
                }
            />
        </div>
    );
};

// Function to get the image source based on company name
const getWorkImage = (company) => {
    switch (company) {
        case "Verge Systems Pvt. Ltd.":
            return verge1;
        case "Folio3 Software":
            return folio3;
        case "Interns Pakistan":
            return internspk;
        case "The Sparks Foundation":
            return spark;
        case "LetsGrowMore":
            return letsgrow;
        default:
            return ""; // Return a default image or handle error if needed
    }
    
};

export default Works;

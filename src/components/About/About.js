import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div className="not-found not-found1">
                <Helmet>
                    <title>About-portfolio</title>
                    <meta name="description" content="About Route" />
                </Helmet>
            <h1>About Me :-</h1>
            <p className="para-text">I'm a passionate React JS Developer with hands-on experience in building dynamic, responsive, and scalable Single Page Applications (SPAs). I specialize in modern web technologies like React JS, Redux, JavaScript (ES6), HTML, CSS, and UI libraries like Material UI and Bootstrap. I’m also familiar with RESTful APIs, Redux state management, and component-based architecture.</p>
        <div >
            <h2>skills :-</h2>
            <ul className="skills-list list-style">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>TypeScript</li>
                <li>Material Ui</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>RazorPay</li>
            </ul>
        </div>
        <div>
            <ul className="list-style">
                <li><strong>Phone:-</strong><span>+91 <b>7995425957</b></span></li>
                <li><strong>Address:-</strong><span><b>vnkt6811@gmail.com</b></span></li>
                <li><strong>Email:-</strong><span><b>Hyderabad</b></span></li>
            </ul>
        </div>
        </div>
    );
}
export default About;
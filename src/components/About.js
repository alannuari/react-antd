import React from 'react';
import { ReadOutlined, SolutionOutlined, FormOutlined } from '@ant-design/icons';
import User from '../assets/alannuari.jpg';

const skills = [
    'Html',
    'CSS',
    'JavaScript',
    'Tailwindcss',
    'Bootstrap',
    'Sass',
    'jQuery',
    'React',
    'PHP',
    'MySQL',
    'Laravel'
];

class About extends React.Component {

    render() { 
        return (
            <div className="wrapper-about">
                <div className="profile-header">
                    <div className="img-wrapper">
                        <img className="img-circle" src={User} alt="User" />
                    </div>
                    <h3 className="username">Alan Nuari</h3>
                    <p className="text">Web Developer</p>
                </div>

                <div className="profile-body">
                    <h3 className="title">About Me</h3>
                    <div className="body-wrapper">
                        <div className='education-title'>
                            <ReadOutlined style={{marginRight: '8px'}} />
                            Education
                        </div>
                        <p className="education-text">
                            B.S. in Mathematics from Airlangga University at Surabaya with specializing in Computational Mathematics
                        </p>
                        <div className='skills-title'>
                            <SolutionOutlined  style={{marginRight: '8px'}}/>
                            Skills
                        </div>
                        <p className="skills-text">
                            {skills.map((skill, idx) => {
                                return (
                                    <span className="skill" key={idx}>{skill}</span>
                                );
                            })}
                        </p>
                        <div className='notes-title'>
                            <FormOutlined  style={{marginRight: '8px'}}/>
                            Notes
                        </div>
                        <p className="notes-text">
                            Coding is the best game
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;
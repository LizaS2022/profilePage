
import React, { Component } from 'react'
import Skills from "./skills.js";
import {Container} from 'react-bootstrap'

export default class Resume extends Component {
  render() {
    return (
        <Container id='resume'>
      <div>
        <h1>Resume</h1>
        <a href="/samplePDF.pdf" download>
            <span>Download Resume</span>
        </a>
        
        <h2>Front-end Proficiencies</h2>
        <ul>
            {Skills.map((skill, index) => (
                skill.frontendSkills.map((frontendSkill, skillIndex) =>(
                    <li key={skillIndex}>{frontendSkill}</li>
                ))
            ))}
            
        </ul>

        <h2>Back-end Proficiencies</h2>
        <ul>
            {Skills.map((skill, index) => (
                skill.backendSkills.map((backendSkill, skillIndex)=>(
                    <li key={skillIndex}>{backendSkill}</li>
                ))
            ))}
        </ul>

      </div>
      </Container>
    )
  }
}

import React from 'react'
import { SiCheckmarx } from 'react-icons/si'
import "./experience.css"
import Skill from "./Skill"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__blockchain">
          <h3>Blockchain</h3>
          <div className="experience__content">
            <Skill title="Solidity" description='Intermediate' />
            <Skill title="Truffle" description='Intermediate' />
            <Skill title="Hardhat" description='Intermediate' />
            <Skill title="Web3.js" description='Intermediate' />
            <Skill title="Ethers.js" description='Intermediate' />
            <Skill title="Mocha" description='Basic' />
          </div>
        </div>
        {/* END OF Blockchain */}

        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <Skill title="Javascript" description='Intermediate' />
            <Skill title="Typescript" description='Intermediate' />
            <Skill title="HTML" description='Intermediate' />
            <Skill title="CSS" description='Intermediate' />
            <Skill title="React" description='Intermediate' />
            <Skill title="Redux" description='Intermediate' />
            <Skill title="Redux-thunk" description='Intermediate' />
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <Skill title="NodeJS" description='Intermediate' />
            <Skill title="Express" description='Intermediate' />
            <Skill title="Linux" description='Basic' />
            <Skill title="Ubuntu" description='Basic' />
            <Skill title="MySQL" description='Intermediate' />
          </div>
        </div>
        {/* END OF BACKEND */}

        <div className="experience__etc">
          <h3>etc</h3>
          <div className="experience__content">
            <Skill title="AWS S3" description='Basic' />
            <Skill title="AWS EC2" description='Basic' />
            <Skill title="AWS RDS" description='Intermediate' />
          </div>
        </div>
        {/* END OF ETC */}
      </div>
    </section>
  )
}

export default Experience
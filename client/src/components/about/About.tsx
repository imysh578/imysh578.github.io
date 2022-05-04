import React from 'react'
import "./about.css"
import { BiBuildings } from 'react-icons/bi'
import { IoMdSchool } from 'react-icons/io'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src="https://user-images.githubusercontent.com/33863016/166649518-e4d93907-9f34-42b0-9710-8fbc284bffc3.jpg" alt="" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<IoMdSchool className="about__icon"/>
							<h5>Education</h5>
							<small>Yonsei Univ.</small><br/>
							<small>Feb 2010 ~ Feb 2019</small>
						</article>

						<article className="about__card">
							<BiBuildings className="about__icon" />
							<h5>Career</h5>
							<small>Philips Korea</small><br/>
							<small>Apr 2019 ~ Jun 2021</small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Academy</h5>
							<small>Blockchain Programming Fullstack Course</small><br/>
							<small>Aug 2021 ~ May 2022</small>
						</article>
					</div>

					<p>
						I have experience to create ERC721 NFT contract, NFT marketplace and auction based on Ethereum.
						For now I would like to develop DApps based on various networks, not only Ethereum.
						In the future, I want to develop a blockchain core or a cross-chain bridge.
						Currently I'm interested in Go and Rust.
					</p>
					<h3>Be Positive, Passionate, Professional!</h3>
          
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
				</div>
			</div>
		</section>
	);
}

export default About
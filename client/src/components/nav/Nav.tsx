import React, { useState, MouseEvent, useEffect } from 'react'
import "./nav.css"
import {AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {FaRegEnvelope} from "react-icons/fa"

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	
	useEffect(() => {
		setActiveNav("#" + window.location.href.split("#").splice(-1)[0]);
	}, [])

	const navOnClick = (clicked: string) => {
		setActiveNav(clicked);
	}

  return (
		<nav>
			<a href="#" className={activeNav==="#"? "active" : ""} onClick={() => {setActiveNav("#")}}><AiOutlineHome /></a>
			<a href="#about" className={activeNav==="#about"? "active" : ""} onClick={() => {setActiveNav("#about")}}><AiOutlineUser /></a>
			<a href="#experience" className={activeNav==="#experience"? "active" : ""} onClick={() => {setActiveNav("#experience")}}><BiBook /></a>
			<a href="#portfolio" className={activeNav==="#portfolio"? "active" : ""} onClick={() => {setActiveNav("#portfolio")}}><AiOutlineFundProjectionScreen /></a>
			<a href="#contact" className={activeNav==="#contact"? "active" : ""} onClick={() => {setActiveNav("#contact")}}><FaRegEnvelope /></a>
		</nav>
	);
}

export default Nav
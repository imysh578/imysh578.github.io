import React from 'react'
import CTA from './CTA'
import "./header.css"
import HeaderSocial from "./HeaderSocial"
import {BsFillArrowUpCircleFill, BsFillArrowDownCircleFill} from "react-icons/bs"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Seokhun Yoon</h1>
        <h5 className="text-light">Blockchain Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src="https://user-images.githubusercontent.com/33863016/166683004-94eaedd0-39af-46a8-8a20-dece7d07958b.png" alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          <BsFillArrowDownCircleFill/>
        </a>
      </div>
    </header>
  )
}

export default Header
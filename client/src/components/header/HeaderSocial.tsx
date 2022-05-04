import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub, FaBlogger} from "react-icons/fa"
import {SiNaver} from "react-icons/si"

const HeaderSocial = () => {
  return (
		<div className="header__socials">
			<a href="https://github.com/imysh578" target="_blank">
				<FaGithub />
			</a>
			<a href="https://velog.io/@imysh578" target="_blank">
				<FaBlogger />
			</a>
			<a href="https://blog.naver.com/yse1030" target="_blank">
				<SiNaver />
			</a>
		</div>
	);
}

export default HeaderSocial
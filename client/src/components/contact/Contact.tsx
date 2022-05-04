import React, { FormEvent, MutableRefObject, useRef } from 'react';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsFillArrowUpCircleFill, BsInstagram} from "react-icons/bs"
import VelogLogo from "../../../public/images/velog.svg"
import {SiNaver} from "react-icons/si"
import emailjs from 'emailjs-com';
import Velog from "./Velog"

const Contact = () => {
  const form = useRef() as MutableRefObject<HTMLFormElement>;

  const sendEmail = (e:FormEvent) => {
    e.preventDefault();
    console.log(e.target);
    
    emailjs.sendForm('service_c3m116t', 'template_vzuf7u6', form.current, '8YhIMyoJV0NphKBpR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    (e.target as HTMLFormElement).reset();
  };

  return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>imysh578@gmail.com</h5>
						<a href="mailto:imysh578@gmail.com" target="_blank">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<SiNaver className="contact__option-icon" />
						<h4>Naver Blog</h4>
						<a href="https://blog.naver.com/yse1030" target="_blank">
							Click to Move
						</a>
					</article>
					<article className="contact__option">
						<Velog />
						<img src={VelogLogo}  className="contact__option-icon" alt="" />
						<h4>Velog</h4>
						<a href="https://velog.io/@imysh578" target="_blank">
							Click to Move
						</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS */}

				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Full Email"
						required
					/>
					<textarea
						name="message"
						rows={7}
						placeholder="Your Full Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>

				<a href="#" className="scroll__up">
					<BsFillArrowUpCircleFill />
				</a>
			</div>
		</section>
	);
}

export default Contact
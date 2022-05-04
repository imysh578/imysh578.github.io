import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs';
import { SiCheckmarx } from 'react-icons/si'

interface propsType {
	title: string,
	description: string,
}

const Skill = ({title, description}: propsType) => {
  return (
		<article className="experience__details">
			<BsPatchCheckFill className='experience__details-icon'/>
			<div>
				<h4>{title}</h4>
				<small className="text-light">{description}</small>
			</div>
		</article>
	);
}

export default Skill
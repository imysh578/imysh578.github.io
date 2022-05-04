import React from 'react'
import {dataType} from "./data"

interface propsType {
  data: dataType
}

const Item = ({data}: propsType) => {
  return (
		<article className="portfolio__item">
			<div className="portfolio__item-image">
				<img src={data.image} alt="" />
			</div>
			<h3>{data.title}</h3>
      <div className="portfolio__item-cta">
        <a href={data.github} className="btn" target="_blank">
          Github
        </a>
      </div>
		</article>
	);
}

export default Item
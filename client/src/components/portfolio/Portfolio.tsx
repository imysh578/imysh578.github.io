import React from 'react'
import "./portfolio.css"
import Item from "./Item"
import dataList, {dataType} from "./data"

const Portfolio = () => {
  return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{dataList.map((data: dataType, index: number) => (
					<Item data={data} key={index} />
				))}
			</div>
		</section>
	);
}

export default Portfolio
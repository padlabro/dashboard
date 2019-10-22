import React from 'react'
import './Youtube.scss'



const Youtube = (props)=>{
	const {data}=props

	const renderItems = data => {
		let itemsList = [];
		if (data.item) {
		  console.log(data.item.items);
		  itemsList = data.item.items.map((item, i) => (
			<div className="card__video" key={i}>
			  <iframe
				title={item.snippet.title}
				width="300"
				height="215"
				src={`https://www.youtube.com/embed/${item.id.videoId}`}
				frameBorder="0"
				allowFullScreen
			  ></iframe>
			</div>
		  ));
		}
		return itemsList;
	  };
	  const items = renderItems(data);


	return (items)
}

export default Youtube
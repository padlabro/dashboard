import React from 'react'
import './Musicbrainz.scss'


const Musicbrainz = (props)=>{
	const {data} = props;
	return (<div className="music">	
		<p className="music__title">{data.item.name}</p>
		<p className="music__from">{data.item.area['sort-name']}</p>
		<p className="music__description">{data.item.disambiguation}</p>
		<div className="music__start">since{data.item['life-span'].begin} to {data.item['life-span'].end}</div>
	</div>)
}

export default Musicbrainz
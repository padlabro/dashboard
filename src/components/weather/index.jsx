import React from 'react'
import './Weather.scss'


const Weather = (props)=>{
	const {data} = props;
	return (<div className="weather">	
		<p >{data.item.data[0].timezone}{data.item.data[0].county_code}</p>
		<p >{data.item.data[0].temp}</p>
		<p >{data.item.data[0].weather.description}</p>	
	</div>)
}

export default Weather
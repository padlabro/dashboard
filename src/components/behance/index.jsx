import React from 'react'
import './Behance.scss'


const Behance = (props)=>{
	const {data} = props;
	return (<div className="behance">	
		<p >username:{data.item.user.username}</p>
		<p >{data.item.user.first_name}   {data.item.user.last_name}</p>
		<p >from:{data.item.user.country}</p>	
		<p >{data.item.user.website}</p>	
	</div>)
}

export default Behance
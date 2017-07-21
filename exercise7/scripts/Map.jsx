import React from 'react';

export default class Map extends React.Component{
	render(){
		return(
			<div className="map-overlay">
				<p>Loading...</p>
				<div id="map"></div>
			</div>
			
		);
	}
	
	componentDidMount(){
		this.componentDidUpdate();
	}
	
	componentDidUpdate(){
		var maps = new GMaps({
			el: "#map",
			lat: this.props.lat,
			lng: this.props.lng
		});
	}
}
import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';


export default class Content extends React.Component{
	constructor(){
		super();
		this.state = {
			currentAddress: 'Anchorage One, 5th Floor, Manchester',
			mapCoords:{
				lat: 53.4744349,
				lng: -2.2881777
			}
		}
	}
	
	render(){
		return(
			<div>
				<h1>Your Google Map Locations</h1>
				<Map latitude={this.state.mapCoords.lat} longitude={this.state.mapCoords.lng} />
				<CurrentLocation address={this.state.currentAddress} />
			</div>
			
		);
	}
}

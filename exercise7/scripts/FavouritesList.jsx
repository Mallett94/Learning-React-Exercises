import React from 'react';
import FavouriteItem from './FavouriteItems';

export default class FavouritesList extends React.Component{
	
	render(){
		var self=this;
		var favouriteLocations=this.props.favouriteLocations.map(function(location){
			var active=self.props.activeLocationAddress===location.address;
			
			return <FavouriteItem address={location.address} key={location.timestamp} 
					timestamp={location.timestamp} active={active} onClick={self.props.onClick.bind(this)}/>
		});
		
		if(!favouriteLocations.length){
			return null;
		}
		
		return(
		<div className="list-group col-xs-12 col-md-6 col-md-offset-3">
			<span className="list-group-item active">Saved Locations</span>
			{favouriteLocations}
		</div>
		);

	}
}
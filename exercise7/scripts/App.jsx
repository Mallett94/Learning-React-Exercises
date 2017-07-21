import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';
import Search from './Search';
import FavouritesList from './FavouritesList';

export default class App extends React.Component{
	constructor(){
		super();
		
		var favouritesArray = [];
		
		if(localStorage.favourites){
			favouritesArray=JSON.parse(localStorage.favourites);
		}
		
		this.state = {
			currentAddress: 'Anchorage One, 5th Floor, Manchester',
			mapCoords:{
				lat: 53.4744349,
				lng: -2.2881777
			},
			favourites: favouritesArray
			
		}
		
	}
	
	searchForAddress(address){
		let self=this;
		GMaps.geocode({
			address: address,
			callback: function(results, status) {
				if(status !== "OK") {
					self.setState({
						currentAddress : "Location not found"
					});
					return;
				}
				let latlng = results[0].geometry.location;
				self.setState({
					currentAddress: results[0].formatted_address,
					mapCoords: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});
			}
		});	
	}
	
	isAddressInFavourites(currentAddress){
		var tempAddress = this.state.favourites;
		for(var i=0; i<tempAddress.length; i++){
			if(tempAddress[i].address===currentAddress){
				return true;
			}
		}
		return false;
	}
	
	favouriteToggle(currentAddress){
		if(this.isAddressInFavourites(currentAddress)){
			this.removeFavourite(currentAddress);
		}
		else{
			this.addFavourite(currentAddress);
		}
	}
	
	removeFavourite(currentAddress){
		var tempArray = this.state.favourites;
		var index = -1;
		for(var i=0; i<tempArray.length;i++){
			if(currentAddress===tempArray[i].address){
				index = i;
				break;
			}
		}
		if(index!==-1){
			tempArray.splice(index, 1);
			this.setState({favourites: tempArray});
			localStorage.favourites = JSON.stringify(tempArray);
			
		}
	}
	
	addFavourite(currentAddress){
		var tempArray2 = this.state.favourites;
		tempArray2.push({
			address: currentAddress,
			timestamp: Date.now()
		})
		this.setState({favourites: tempArray2});
		localStorage.favourites=JSON.stringify(tempArray2);
	}
	
	render(){
		return(
			<div>
				<h1>Your Google Map Locations</h1>
				<Search onSearch={this.searchForAddress.bind(this)} />
				<Map lat={this.state.mapCoords.lat} lng={this.state.mapCoords.lng} />
				<CurrentLocation address={this.state.currentAddress} 
					favourite={this.isAddressInFavourites(this.state.currentAddress)} 
					onFavouriteToggle={this.favouriteToggle.bind(this)} />
				<FavouritesList favouriteLocations={this.state.favourites}
					activeLocationAddress={this.state.address} 
					onClick={this.searchForAddress.bind(this)} />
			</div>
			
		);
	}
}

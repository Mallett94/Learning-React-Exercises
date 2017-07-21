import React from 'react';

export default class CurrentLocation extends React.Component{
	
	toggleFavourite(){
		this.props.onFavouriteToggle(this.props.address);
	}
	
	render(){
		var newClassName;
		if(this.props.address!=="Location not found..."){
			if(this.props.favourite){
				newClassName="glyphicon glyphicon-star";
			}
			else{
				newClassName="glyphicon glyphicon-star-empty";
			}
		}
		return(
		<div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
			<h4 id="save-location">{this.props.address}</h4>
			<span className={newClassName} onClick={this.toggleFavourite.bind(this)} aria-hidden="true"></span>
			
		</div>
		);
	}
	
	
	
	
}
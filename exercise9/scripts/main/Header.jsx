import React from 'react';
import Title from './title';
import MainNav from './mainNav';

export default class Header extends React.Component{
	
	render(){
		return(
		<div className="top-bar">
			<Title />
			<MainNav />
		</div>
		);
	}
}
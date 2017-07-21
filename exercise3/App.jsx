import React from 'react';

export class Header extends React.Component{
	render(){
		return(
				<title>Exercise 3</title>
		);
	}
}

export class Content extends React.Component{
	render(){
		return(
			<div>
				<h1>Hello World!</h1>
				<p>This is the paragraph from exercise 3!</p>
			</div>
		);
	}
}
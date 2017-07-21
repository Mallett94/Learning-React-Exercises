import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Home from './main/Home';
import Films from './films/Films';
import FilmDescription from './films/FilmDescription';
import Actors from './actors/Actors';
import ActorDetails from './actors/ActorDetails';



ReactDOM.render(
	<Router history={browserHistory} >
		
	</Router>,
	document.querySelector("#app")
	);

import React from 'react';

export function mainNav(){
	return(
	
	<nav className="top-bar-right" id="menu">
		<h6 className="hide">Site Navigation</h6>
		<ul className="vertical medium-horizontal menu">
			<li><IndexLink className="pageLink" to="/">Home</IndexLink></li>
			<li><IndexLink className="pageLink" to="/films">Films</IndexLink></li>
			
		</ul>
	</nav>
	);
}
	
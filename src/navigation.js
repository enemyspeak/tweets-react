import React, { Component } from 'react';
// import Tweet from './tweet'
import './twitter.css';

const navItems = [ "Timeline","Mentions","Direct Messages","Search","Profile" ]

class Navigation extends Component {
	constructor(props) {
    	super(props);
    	this.state = {selectedTab: 'Timeline'};
    }

	render() {
		return (
		    <div className="nagivation">
	        	<nav>
    		        {navItems.map(obj => {
			          	return (
			            	<div className={"navigation-item " + (this.state.selectedTab == obj ? 'active' : '')} id={obj}>
				            	<div className="icon-contain">
				            		icon
				              	</div>
							</div>
			          	);
			        })}
	        	</nav>
	        </div>
        ); // <div className="unread"></div>
	}
}

export default Navigation;

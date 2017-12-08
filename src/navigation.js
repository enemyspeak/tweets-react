import React, { Component } from 'react';
// import Tweet from './tweet'
import './twitter.css';

const navItems = [ "Timeline","Mentions","Direct Messages","Search","Profile" ]

class Navigation extends Component {
	constructor(props) {
    	super(props);
    	this.state = {selectedTab: 'Timeline'};
    }
	handleClick(obj,e) {
		console.log(obj);
		// console.log('this is:', this);
		this.setState({
			selectedTab: obj
		});
	}
	render() {
		return (
		    <div className="nagivation">
	        	<nav>
    		        {navItems.map(obj => {
			          	return (
			            	<div className={"navigation-item " + (this.state.selectedTab === obj ? 'active' : '')} id={obj} onClick={(e) => this.handleClick(obj, e)}>
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

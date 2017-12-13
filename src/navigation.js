import React, { Component } from 'react';
// import Tweet from './tweet'
// import './twitter.css';

const navItems = [  
	{
	"name": "timeline",
	"icon":"fi-home"
	},
	{
	"name": "mentions",
	"icon":"fi-at-sign"
	},
	{
	"name": "search",
	"icon":"fi-magnifying-glass"
	},
	{
	"name": "profile",
	"icon":"fi-torso"
	}
]; // 	{ // can't access direct messages without oauth
	// "name": "direct-messages",
	// "icon":"fi-mail"
	// },

class Navigation extends Component {
	handleClick(obj,e) {
		this.props.handleClick(obj);
	}
	render() {
		return (
		    <div className="nagivation">
	        	<nav>
    		        {navItems.map(obj => {
			          	return (
			            	<div alt={obj.name} className={"navigation-item " + (this.props.selectedTab === obj.name ? 'active' : '')} key={obj.name} id={obj.name} onClick={(e) => this.handleClick(obj.name, e)}>
				            	<div className={"icon-contain " + obj.icon}></div>
							</div>
			          	);
			        })}
	        	</nav>
	        </div>
        ); // <div className="unread"></div>
	}
}
	
export default Navigation;




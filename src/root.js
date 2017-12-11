import React, { Component } from 'react';

// import Navigation from './navigation'
import Timeline from './timeline'
import Mentions from './mentions' // do we even need another class for this?
import Profile from './profile'
import DirectMessages from './directMessages'
import Search from './search'

const navItems = [  
	{
	"name": "timeline",
	"icon":"fi-home"
	},
	{
	"name": "mentions",
	"icon":"fi-comment"
	},
	{
	"name": "direct-messages",
	"icon":"fi-mail"
	},
	{
	"name": "search",
	"icon":"fi-magnifying-glass"
	},
	{
	"name": "profile",
	"icon":"fi-torso"
	}
];

class Root extends Component {
	constructor(props) {
    	super(props);
    	this.state = {selectedTab: 'timeline'};
    }
	handleClick(obj,e) {
		// console.log(obj);
		// console.log('this is:', this);
		this.setState({
			selectedTab: obj
		});				
	}
	render() {
		return (
			<div className="app-wrapper">
				<div className="header-row">
					React.js Twitter App
				</div>
				<div className="navigation-contain">
				    <div className="nagivation">
			        	<nav>
		    		        {navItems.map(obj => {
					          	return (
					            	<div alt={obj.name} className={"navigation-item " + (this.state.selectedTab === obj.name ? 'active' : '')} key={obj.name} id={obj.name} onClick={(e) => this.handleClick(obj.name, e)}>
						            	<div className={"icon-contain " + obj.icon}></div>
									</div>
					          	);
					        })}
			        	</nav>
			        </div>
				</div>
				<div className="app-contain">
					<Timeline activeTab={this.state.selectedTab == 'timeline' ? true : false} />
					<Mentions activeTab={this.state.selectedTab == 'mentions' ? true : false} /> 
					<Search activeTab={this.state.selectedTab == 'search' ? true : false} />
					<DirectMessages activeTab={this.state.selectedTab == 'direct-messages' ? true : false} />
					<Profile activeTab={this.state.selectedTab == 'profile' ? true : false} /> 
				</div>
			</div>
        );
	}
}

export default Root;

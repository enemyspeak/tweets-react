import React, { Component } from 'react';

import Navigation from './navigation'
import Timeline from './timeline'
// import Mentions from './mentions' // do we even need another class for this?
import Profile from './profile'
import DirectMessages from './directMessages'
import Search from './search'

import { fetchHomeTimeline, fetchMentions, fetchHomeUser,subscribeToHomeTimeline } from './api';

class Root extends Component {
	constructor(props) {
    	super(props);
    	this.state = {selectedTab: 'timeline'};
	    this.handleClick = this.handleClick.bind(this);
    }
	handleClick(obj,e) {
		this.setState({
			selectedTab: obj
		});				
	}
	render() {
		return (
			<div className="app-wrapper">
				<div className="header-row">
					<div className="fi-social-twitter"></div>
					<div>Squawk Box</div>
				</div>
				<div className="compose-tweet" alt="Compose">
					<span className="fi-pencil"></span>
				</div>
				<div className="navigation-contain">
				    <div className="nagivation">
			        	<Navigation handleClick={this.handleClick} selectedTab={this.state.selectedTab} />
			        </div>
				</div>
				<div className="app-contain">
					<Timeline dataSource={fetchHomeTimeline} stream={subscribeToHomeTimeline} activeTab={this.state.selectedTab === 'timeline' ? true : false} /> 
					<Timeline dataSource={fetchMentions} activeTab={this.state.selectedTab === 'mentions' ? true : false} />
					<Search activeTab={this.state.selectedTab === 'search' ? true : false} />
					<DirectMessages activeTab={this.state.selectedTab === 'direct-messages' ? true : false} />
					<Profile activeTab={this.state.selectedTab === 'profile' ? true : false} />
				</div>
			</div>
        );
	}
}

export default Root;

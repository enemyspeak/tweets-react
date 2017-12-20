import React, { Component } from 'react';
import { gotTwitterLoginPromise,fetchDirectMessages } from './api';

class DirectMessages extends Component {
	constructor(props) {
    	super(props);
    
	    gotTwitterLoginPromise().then((data) => {
	    	fetchDirectMessages((err, messages) => this.setState({ 
        		messages
      		}));
    	});
  	}
  	state = {
  		
  	}
	setSelectedTweet(id) {
		this.setState({selectedTweet:id});
	}
	render() {
		return (
			<div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
				<div className="messages-contain">
					{this.state.messages}
				</div>
			</div>
		);
	}
}

export default DirectMessages;

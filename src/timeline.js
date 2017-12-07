import React, { Component } from 'react';
import Tweet from './tweet'
import './twitter.css';

class Timeline extends Component {
	renderTweet(props){
	    return <Tweet data={props} />;
	}
	render() {
		return (
		    <div className="twitter-app">

	        	<div className="view-header-label">Timeline</div>
	        	<div className="timeline-contain">
	        		{this.renderTweet({ text: "this is a tweet",user: {screen_name: "okoko"}})}
	        	</div>
	        </div>
        );
	}
}

export default Timeline;
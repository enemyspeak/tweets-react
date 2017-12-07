import React, { Component } from 'react';
import './twitter.css';

function Avatar(props) {
	return (
		<img className="Avatar"
  			src={props.user.profile_image_url_https}
  			alt={props.user.screen_name}
		/>
	);
}
 
function UserInfo(props){
	// console.log(props);
	return(
		<div className="tweet-user">
			<div className="user-avatar">
		        <Avatar user={props.user} />
		    </div>

			<span className="name">{props.user.name}</span>
			<span className="screenName">@{props.user.screen_name}</span>
			<div className="status-contain">
				<span className="favorited">
					favorited icon
				</span>
				<span className="retweeted">
					retweeted icon
				</span> 
			</div>
			
		</div>
	);
}// <span className="tweet-date">{relativeTime}</span>

function OiginalUser(props) { // this is a retweet
	return (
		<div className="show-retweet" data-userid="{props.originalUser.id}">
			<span>
				icon
			</span>
			<div className="retweet-user-avatar">
		        <Avatar user={props.originalUser} />
			</div>
			<span>{props.originalUser.name}</span>
		</div>
	)
}

function Media(media) {
	// return (
	// 	<div className="media-contain">
	// 		{{#each entities.media}} 
	// 			<div className="media-box image{{@index}}">
	// 				<img src="{{this.media_url_https}}:small">	
	// 			</div>
	// 		{{/each}}
	// 	</div>
	// );
}

function QuotedStatus(user) {
	// return(
	// 	<div className="quoted-tweet" data-id="{{quoted_status.id}}" data-userid="{{quoted_status.user.id}}">
	// 		<div className="quoted-user-avatar">
	// 	        <Avatar user={quoted_status.user} />
	// 		</div>
	// 		<div className="quoted-tweet-body">
	// 			<div className="tweet-user">
	// 				<span className="name">{{quoted_status.user.name}}</span>
	// 				<span className="screenName">@{{quoted_status.user.screen_name}}</span>
	// 				<span className="tweet-date">{{quoted_status.relativeTime}}</span>
	// 			</div>
	// 			<span className="tweet-text">{{escapeHtml quoted_status.text}}</span>
	// 			{{#if quoted_status.entities.media}} <!-- this is images -->
	// 				<Media media={media} />
	// 			{{/if}}
	// 		</div>
	// 	</div>
	// );
}
class TweetControls extends Component {
  	constructor(props) {
    	super(props);
    	// this.state = {showButtons: false};

    	// This binding is necessary to make `this` work in the callback
    	this.handleClick = this.handleClick.bind(this);
  	}
  	handleClick() {
    	this.setState(prevState => ({
      		isToggleOn: !prevState.isToggleOn
    	}));
  	}
	render() {
		console.log(this.props);
		return (
			<div className="tweet-controls">
				<button className="reply" onClick={this.handleClick}>
					reply
				</button>
				<button className="favorite" onClick={this.handleClick}>
					favorite
				</button>
				<button className="retweet" onClick={this.handleClick}>
					retweet
				</button>
				<button className="details" onClick={this.handleClick}>
					details
				</button>
			</div>
		)
	}
}

class Tweet extends Component {
  	// constructor(props) {
   //  	super(props);
   //  	// this.state = {showButtons: false};

   //  	// This binding is necessary to make `this` work in the callback
   //  	this.handleClick = this.handleClick.bind(this);
  	// }
  	// handleClick() {
   //  	this.setState(prevState => ({
   //    		isToggleOn: !prevState.isToggleOn
   //  	}));
  	// }

	render() {
		console.log(this.props.data);
		console.log(this.props.data.user);
		return (
			<div className="tweet-contain" id={this.props.data.id_str} userid={this.props.data.user.id_str}>
				<div className="tweet-body">
				    <UserInfo user={this.props.data.user} />
					<span className="tweet-text">{this.props.data.text}</span>
				</div>

				<TweetControls props={this.props.data} />
			</div>
		)
	}
}

export default Tweet;
import React, { Component } from 'react';
import './twitter.css';

function Avatar(user) {
	return (
		<img className="Avatar"
  			src={user.profile_image_url_https}
  			alt={user.screen_name}
		/>
	);
}

 
function UserInfo(user){
	return(
		<div className="tweet-user">
			<div className="user-avatar">
		        <Avatar user={user} />
		    </div>

			<span className="name">{user.name}</span>
			<span className="screenName">@{user.screen_name}</span>
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


class Tweet extends Component {
	// constructor(props) {
	//  //    var props = {
	// 	// 	user: {
	// 	// 		screen_name: "ok"
	// 	// 	},
	// 	// 	text: "okokokokokok",
	// 	// }
	//     super(props);
		
	// 	console.log(this.props.);
	// }

	// Media(media) {
	// 	return (
	// 		<div className="media-contain">
	// 			{{#each entities.media}} 
	// 				<div className="media-box image{{@index}}">
	// 					<img src="{{this.media_url_https}}:small">	
	// 				</div>
	// 			{{/each}}
	// 		</div>
	// 	);
	// }

	// QuotedStatus(user) {
	// 	return(
	// 		<div className="quoted-tweet" data-id="{{quoted_status.id}}" data-userid="{{quoted_status.user.id}}">
	// 			<div className="quoted-user-avatar">
			        // <Avatar user={quoted_status.user} />
	// 			</div>
	// 			<div className="quoted-tweet-body">
	// 				<div className="tweet-user">
	// 					<span className="name">{{quoted_status.user.name}}</span>
	// 					<span className="screenName">@{{quoted_status.user.screen_name}}</span>
	// 					<span className="tweet-date">{{quoted_status.relativeTime}}</span>
	// 				</div>
	// 				<span className="tweet-text">{{escapeHtml quoted_status.text}}</span>
	// 				{{#if quoted_status.entities.media}} <!-- this is images -->
	// 					<Media media={media} />
	// 				{{/if}}
	// 			</div>
	// 		</div>
	// 	);
	// }

	OriginalUser(originalUser) { // this is a retweet
		return (
			<div className="show-retweet" data-userid="{originalUser.id}">
				<span>
					icon
				</span>
				<div className="retweet-user-avatar">
			        <Avatar user={originalUser} />
				</div>
				<span>{originalUser.name}</span>
			</div>
		)
	}


	render() {
		console.log(this.props.data);
		console.log(this.props.data.user);
		return (
			<div className="tweet-contain" data-id="{id}" data-userid="{user.id}">
				<div className="tweet-body">
				    <UserInfo user={this.props.data.user} />
					<span className="tweet-text">{this.props.data.text}</span>
				</div>

				<div className="tweet-controls">
					<span className="{{#if replied}}active{{/if}}" data-action="reply">
					reply icon
					</span>
					<span className="{{#if favorited}}active{{/if}}" data-action="favorite">
					favorite icon
					</span>
					<span className="{{#if retweeted}}active{{/if}}" data-action="retweet">
					retweet icon
					</span>
					<span data-action="details">
					details icon
					</span>
				</div>
			</div>
		)
	}
}

export default Tweet;
import React, { Component } from 'react';
import { favoriteTweet,unfavoriteTweet,retweetTweet,unretweetTweet } from './api'; 
import {Avatar,UserInfo,Media,RelativeTime} from './common'

function OiginalUser(props) { // this is a retweet
	return (
		<div className="retweeted-by-contain" onClick={() => props.onClick(props.user.screen_name)}>
			<span className="fi-loop"></span>
			<div className="retweet-user-avatar">
		        <Avatar user={props.user} />
		    </div>
			<span className="retweet-user">{props.user.name}</span>
		</div>
	)
}


function QuotedStatus(props) {
	// console.log(props.mentionHandler);
	return(
		<div className="quoted-tweet" data-id="{props.id}" data-userid="{props.user.id}">
			<UserInfo user={props.quoted_status.user} onClick={props.onClick} />
			<span className="tweet-date">{props.quoted_status.relativeTime}</span>

		    <TweetBody tweet={props.quoted_status} onClick={props.onClick} />

	    	<div className="status-contain">
				<RelativeTime created_at={props.quoted_status.created_at} />
			</div>

			{(props.quoted_status.extended_entities && props.quoted_status.extended_entities.media ) &&
				<Media media={props.quoted_status.extended_entities.media} />
			}
			{/* <TweetStatistics favorite_count={props.quoted_status.favorite_count} retweet_count={props.quoted_status.retweet_count} /> */}
		</div>
	);
}

function TweetStatistics(props) {
	return (
		<div className="tweet-statistics">
			<div className="fi-star">{props.favorite_count}</div>
			<div className="fi-loop">{props.retweet_count}</div>	
		</div>
	)
}

class TweetControls extends Component {
  	createReply() {
		// TODO
  	}
  	showDetails() {
		// TODO
  	}
	render() {
		// console.log(this.props);
		return (
			<div className="tweet-controls">
				<button className="reply" onClick={this.createReply}>
					<div className="fi-comment-quotes"></div>
				</button>
				<button className={"retweet " + (this.props.retweeted ? "active" : "")} onClick={() => this.props.handleRetweetTweet()}>
					<div className="fi-loop"></div>
				</button>
				<button className={"favorite " + (this.props.favorited ? "active" : "")} onClick={() => this.props.handleFavoriteTweet()}>
					<div className="fi-star"></div>
				</button>
				<button className="details" onClick={this.showDetails}>
					<div className="fi-magnifying-glass"></div>
				</button>
			</div>
		)
	}
}

class TweetBody extends Component {
	createMarkup(html) { 
		return {__html: html}; 
	}
	replaceAll(str,strReplace, strWith) {
	    // See http://stackoverflow.com/a/3561711/556609
	    // eslint-disable-next-line
	    var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    var reg = new RegExp(esc, 'ig');
	    return str.replace(reg, strWith);
	}
	onClickHandler(event) {
		// user mention:
		// check if this is a click on an element with data-username.
		// console.log(event.target);
		let mention = event.target.getAttribute('data-username');
		if (mention) {
			this.props.onClick(mention);
		}
		// hashtag:
		// check if there's data-hashtag
		let hashtag = event.target.getAttribute('data-hashtag');
		if (hashtag) {
			// this.props.onClick(hashtag);
			// TODO search a hashtag..
		}

		// url? return;
		// not either? return;
	}
	render() {
		const tweet = this.props.tweet;
		// console.log(tweet);

		var text;
		if (tweet.extended_tweet) {
			text = tweet.extended_tweet.full_text;
		} else if (tweet.full_text) {
			text = tweet.full_text;
		} else {
			text = tweet.text;
		}

		if ( ( tweet.extended_entities && tweet.extended_entities.media ) ||
			 ( tweet.extended_tweet && tweet.extended_tweet.extended_entities && tweet.extended_tweet.extended_entities.media ) ) {
			let lastIndex = text.lastIndexOf(" ");

			text = text.substring(0, lastIndex); // remove the last word, that's a url to the image.
		}

		if (tweet.is_quote_status) { // remove the last url if this is a retweet because that's unneeded too.
			let lastIndex = text.lastIndexOf("\n");
			if (lastIndex === -1) lastIndex = text.lastIndexOf(" ");
			//console.log(lastIndex)
			// console.log(text,'before')
			text = text.substring(0, lastIndex); 
			// console.log(text,'after')
		}

		if (tweet.extended_tweet) { // this is kind of messy, but it's working.
			for (let i = tweet.extended_tweet.entities.urls.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,tweet.extended_tweet.entities.urls[i].url,
					'<a class="url" target="_blank" href="'+ tweet.extended_tweet.entities.urls[i].expanded_url +'">'+tweet.extended_tweet.entities.urls[i].display_url+'</a>'
				);
			}
			for (let i = tweet.extended_tweet.entities.hashtags.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,"#"+tweet.extended_tweet.entities.hashtags[i].text,
					'<span class="hashtag" data-hashtag="'+tweet.extended_tweet.entities.hashtags[i].text+'">#'+tweet.extended_tweet.entities.hashtags[i].text+'</span>'
				);
			}
			for (let i = tweet.extended_tweet.entities.user_mentions.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,'@'+tweet.extended_tweet.entities.user_mentions[i].screen_name,
					'<span class="user-mention" data-username="'+tweet.extended_tweet.entities.user_mentions[i].screen_name+'")}">@' + tweet.extended_tweet.entities.user_mentions[i].screen_name+'</span>'
				);
			}
		} else {
			for (let i = tweet.entities.urls.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,tweet.entities.urls[i].url,
					'<a class="url" target="_blank" href="'+ tweet.entities.urls[i].expanded_url +'">'+tweet.entities.urls[i].display_url+'</a>'
				);
			}
			for (let i = tweet.entities.hashtags.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,"#"+tweet.entities.hashtags[i].text,
					'<span class="hashtag" data-hashtag="'+tweet.entities.hashtags[i].text+'">#'+tweet.entities.hashtags[i].text+'</span>'
				);
			}
			for (let i = tweet.entities.user_mentions.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,'@'+tweet.entities.user_mentions[i].screen_name,
					'<span class="user-mention" data-username="'+tweet.entities.user_mentions[i].screen_name+'")}">@' + tweet.entities.user_mentions[i].screen_name+'</span>'
				);
			}
		}

	  	return (
			<p className="tweet-text" dangerouslySetInnerHTML={this.createMarkup(text)} onClick={(event) => this.onClickHandler(event)}></p>
		);
	}
}

class Tweet extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
    		retweeted: this.props.data.retweeted,
    		favorited: this.props.data.favorited,
    	};
  	}
	handleFavoriteTweet(id) { // this can just call to the api and update this icon.
		if (this.state.favorited) { // check if this is favorited already.
			unfavoriteTweet(id).then(() => this.setState({favorited: !this.state.favorited})).catch((err)=> console.error(err));
		} else {
			favoriteTweet(id).then(() => this.setState({favorited: !this.state.favorited})).catch((err)=> console.error(err));
		}
  	}
  	handleRetweetTweet(id) { // this can just call to the api and update this icon.
  		if (this.state.retweeted) { // check if this is favorited already.
			unretweetTweet(id).then(() => this.setState({retweeted: !this.state.retweeted})).catch((err)=> console.error(err));
		} else {
			retweetTweet(id).then(() => this.setState({retweeted: !this.state.retweeted})).catch((err)=> console.error(err));
		}
  	}
	render() {
		// console.log(this.props.data);
		let tweet = this.props.data;

		if (this.props.data.retweeted_status) {
			tweet = this.props.data.retweeted_status;
			tweet.retweeteduser = this.props.data.user;
		}
		let tweetStyle = {
			// maxHeight: this.state.height
    	};
		return (
			<div ref={ (divElement) => this.divElement = divElement} style={tweetStyle} className={"tweet-contain " + this.props.data.selected} id={tweet.id_str} userid={tweet.user.id_str} onClick={() => this.props.onClick()}>
				<div className="tweet-body">
				    <UserInfo user={tweet.user} onClick={this.props.mentionHandler} />

				    <TweetBody tweet={tweet} onClick={this.props.mentionHandler} />

					<div className="status-contain">
						<RelativeTime created_at={tweet.created_at} />
						<div className={"fi-star " + (this.state.favorited ? "active" : "")}></div>
						<div className={"fi-loop " + (this.state.retweeted ? "active" : "")}></div>						
					</div>

					{ (tweet.extended_tweet && tweet.extended_tweet.extended_entities) && <Media media={tweet.extended_tweet.extended_entities.media} /> }
					{ tweet.extended_entities && <Media media={tweet.extended_entities.media} /> }
					{ tweet.quoted_status && <QuotedStatus quoted_status={tweet.quoted_status} onClick={this.props.mentionHandler} />}
					{ tweet.retweeteduser && (
						<OiginalUser user={tweet.retweeteduser} onClick={this.props.mentionHandler} />
					)}
					
					{ this.props.data.selected && (
						<TweetStatistics favorite_count={tweet.favorite_count} retweet_count={tweet.retweet_count} /> 
					)}
				</div>
				<TweetControls 
					retweeted={this.state.retweeted}
					favorited={this.state.favorited}
					handleFavoriteTweet={()=>this.handleFavoriteTweet(tweet.id_str)}
					handleRetweetTweet={()=>this.handleRetweetTweet(tweet.id_str)}
				/>
			</div>
		);
	}
}

export default Tweet;
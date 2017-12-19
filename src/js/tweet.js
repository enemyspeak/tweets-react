import React, { Component } from 'react';
// import twttr from 'twitter-text'; // not useful.
import { favoriteTweet,unfavoriteTweet } from './api'; 

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
		<div className="tweet-user" onClick={() => props.onClick(props.user.screen_name)}>
			<div className="user-avatar">
		        <Avatar user={props.user} />
		    </div>
		    {props.user.verified && ( <div className="verified"></div> )}
			<span className="name">{props.user.name}</span>
			<span className="screenName">@{props.user.screen_name}</span>
		</div>
	);
}

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

function VideoMedia(props) {
	// TODO load video's bitrate responsive to size of viewport
	let index = 0;
	const variants = props.obj.video_info.variants;
	const bitrate_max = 832000;

	const loop = (props.obj.type === "animated_gif" ? true : false );

	for (var i = variants.length - 1; i >= 0; i--) {
		if ((variants[i].content_type === "video/mp4") && (variants[i].bitrate < bitrate_max)) {
			index = i;
		}
	}
	return (
		<video controls loop={loop} poster={props.obj.media_url_https + ":small"} src={variants[index].url} type={variants[index].content_type} >
			{ /* {obj.video_info.variants.map(source => {
				return (
		    		<source src={source.url} type={source.content_type} />
		    	);
		    } */}
		</video>
	)
}

function Media(props) {
	// TODO load image'ss size responsive to size of viewport
	return (
		<div className="media-contain">
	        {props.media.map(obj => {
            	return (
            		<div className="media-box" key={obj.id_str}>
						{(obj.type === "video" || obj.type === "animated_gif") && (
							<VideoMedia obj={obj} />
						)}
						{(obj.type === "photo") && (
							<img src={obj.media_url_https + ":small"} alt={obj.display_url} />	
						)}
					</div>
				);
	        })}
		</div>
	);
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

class RelativeTime extends Component {
	relativeTime() {
		// console.log(this.props);
		let time = this.props.created_at;

	 	if (!time) return;

	    // let day,month,year;
	    let date = new Date(time),
	        diff = ( (( new Date().getTime() ) - date.getTime()) / 1000),
	        // day_diff = ( new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()).getTime() - new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime() ) / 1000 / 86400, //
	        day_diff = Math.floor(diff / 86400);
	    
	    if (isNaN(day_diff) || diff <= 0)
	        return (
	        	"now"
	            // year.toString()+'-'+
	            // ((month<10) ? '0'+month.toString() : month.toString())+'-'+
	            // ((day<10) ? '0'+day.toString() : day.toString())
	        );
	    
	    var r = (
	        diff > 0 &&
	        (
	            day_diff === 0 &&
	            (
	                (
	                    (diff < 60 && Math.ceil(diff) + "s") ||
	                    (diff < 3600 && Math.ceil(diff / 60)  + "m") ||
	                    (diff < 7200 && "1h") ||
	                    (diff < 86400 && Math.floor(diff / 3600) + "h")
	                )
	            ) ||
	            (day_diff === 1 && "1d") ||
	            (Math.ceil(day_diff) + "d")
	        )
	    );
	    // console.log(r);
	    return r;
	}
   	render() {
   		// console.log(this);
		return (
			<span className="tweet-date">{this.relativeTime()}</span>
		) // 
   	}
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
	    var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    var reg = new RegExp(esc, 'ig');
	    return str.replace(reg, strWith);
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
			var lastIndex = text.lastIndexOf(" ");

			text = text.substring(0, lastIndex); // remove the last word, that's a url to the image.
		}

		if (tweet.is_quote_status) { // remove the last url if this is a retweet because that's unneeded too.
			var lastIndex = text.lastIndexOf("\n");
			if (lastIndex === -1) lastIndex = text.lastIndexOf(" ");
			//console.log(lastIndex)
			// console.log(text,'before')
			text = text.substring(0, lastIndex); 
			// console.log(text,'after')
		}

		if (tweet.extended_tweet) { // this is kind of messy, but it's working.
			for (let i = tweet.extended_tweet.entities.urls.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,tweet.extended_tweet.entities.urls[i].url,'<a class="url" href="'+ tweet.extended_tweet.entities.urls[i].expanded_url +'">'+tweet.extended_tweet.entities.urls[i].display_url+'</a>');
			}
			for (let i = tweet.extended_tweet.entities.hashtags.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,"#"+tweet.extended_tweet.entities.hashtags[i].text,'<span class="hashtag">#'+tweet.extended_tweet.entities.hashtags[i].text+'</span>');
			}
			for (let i = tweet.extended_tweet.entities.user_mentions.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,'@'+tweet.extended_tweet.entities.user_mentions[i].screen_name,'<span class="user-mention" onClick="{() => this.props.onClick(\''+tweet.extended_tweet.entities.user_mentions[i].screen_name+'\')}">@' + tweet.extended_tweet.entities.user_mentions[i].screen_name+'</span>');
			}
		} else {
			for (let i = tweet.entities.urls.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,tweet.entities.urls[i].url,'<a class="url" href="'+ tweet.entities.urls[i].expanded_url +'">'+tweet.entities.urls[i].display_url+'</a>');
			}
			for (let i = tweet.entities.hashtags.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,"#"+tweet.entities.hashtags[i].text,'<span class="hashtag">#'+tweet.entities.hashtags[i].text+'</span>');
			}
			for (let i = tweet.entities.user_mentions.length - 1; i >= 0; i--) {
				text = this.replaceAll(text,'@'+tweet.entities.user_mentions[i].screen_name,'<span class="user-mention" onClick="{() => this.props.onClick(\''+tweet.entities.user_mentions[i].screen_name+'\')}">@' + tweet.entities.user_mentions[i].screen_name+'</span>');
			}
		}

	  	return (
			<p className="tweet-text" dangerouslySetInnerHTML={this.createMarkup(text)}></p>
		);
	}
}

class Tweet extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
    		retweeted: this.props.data.retweeted,
    		favorited: this.props.data.favorited
    	};
  	}
	handleFavoriteTweet(id) { // this can just call to the api and update this icon.
		// console.log(id);

		favoriteTweet(id).then(() => this.setState({favorited: !this.state.favorited})).catch((err)=> console.error(err));
  	}
  	handleRetweetTweet() { // this can just call to the api and update this icon.
  		this.setState({retweeted: !this.state.retweeted});
  	}
	render() {
		// console.log(this.props.data);
		let tweet = this.props.data;

		if (this.props.data.retweeted_status) {
			tweet = this.props.data.retweeted_status;
			tweet.retweeteduser = this.props.data.user;
		}
		return (
			<div className={"tweet-contain " + this.props.data.selected} id={tweet.id_str} userid={tweet.user.id_str} onClick={() => this.props.onClick()}>
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
					
					{/* <TweetStatistics favorite_count={tweet.favorite_count} retweet_count={tweet.retweet_count} /> */}
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
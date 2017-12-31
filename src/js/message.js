
import React, { Component } from 'react';
import {Avatar,Media,RelativeTime} from './common'
 
class MessageBody extends Component {
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
		const message = this.props.message;
		// console.log(message);
		var text = message.text;


		if ( message.entities.media ) {
			let lastIndex = text.lastIndexOf(" ");

			text = text.substring(0, lastIndex); // remove the last word, that's a url to the image.
		}
		
		for (let i = message.entities.urls.length - 1; i >= 0; i--) {
			text = this.replaceAll(text,message.entities.urls[i].url,
				'<a class="url" target="_blank" href="'+ message.entities.urls[i].expanded_url +'">'+message.entities.urls[i].display_url+'</a>'
			);
		}
		for (let i = message.entities.hashtags.length - 1; i >= 0; i--) {
			text = this.replaceAll(text,"#"+message.entities.hashtags[i].text,
				'<span class="hashtag" data-hashtag="'+message.entities.hashtags[i].text+'">#'+message.entities.hashtags[i].text+'</span>'
			);
		}
		for (let i = message.entities.user_mentions.length - 1; i >= 0; i--) {
			text = this.replaceAll(text,'@'+message.entities.user_mentions[i].screen_name,
				'<span class="user-mention" data-username="'+message.entities.user_mentions[i].screen_name+'")}">@' + message.entities.user_mentions[i].screen_name+'</span>'
			);
		}
		
	  	return (
			<p className="message-text" dangerouslySetInnerHTML={this.createMarkup(text)} onClick={(event) => this.onClickHandler(event)}></p>
		);
	}
}

class Message extends Component {
	render() {
		// console.log(this.props);
		return (
			<div className={"message " + (this.props.data.mine ? "mine" : "" )}>
				<div className="user-avatar">
			        <Avatar user={this.props.data.sender} />
			    </div>

		        <MessageBody message={this.props.data} onClick={this.props.onClick}/>
		        
		        <RelativeTime created_at={this.props.data.created_at} />

				{ this.props.data.entities.media &&
					<Media media={this.props.data.entities.media} /> 
				}

			</div>
		)
	}
}

export default Message;

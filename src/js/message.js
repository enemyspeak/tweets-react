
import React, { Component } from 'react';

function Avatar(props) {
	return (
		<img className="Avatar"
  			src={props.user.profile_image_url_https}
  			alt={props.user.screen_name}
		/>
	);
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
	        	// eslint-disable-next-line
	            day_diff === 0 &&
	            (
	                (
	                    (diff < 60 && Math.ceil(diff) + "s") ||
	                    (diff < 3600 && Math.ceil(diff / 60)  + "m") ||
	                    (diff < 7200 && "1h") ||
	                    (diff < 86400 && Math.floor(diff / 3600) + "h")
	                )
	            // eslint-disable-next-line
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
			<span className="message-date">{this.relativeTime()}</span>
		) // 
   	}
}

function VideoMedia(props) {
	// TODO load video's bitrate responsive to size of viewport
	let index = 0;
	const variants = props.obj.video_info.variants;
	const bitrate_max = 832000;
	const viewport = 300;
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
	// TODO load image size responsive to size of viewport
	const viewport = 300;
	const length = props.media.length;
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

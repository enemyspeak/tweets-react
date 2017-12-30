import React, { Component } from 'react';
import { gotTwitterLoginPromise,fetchDirectMessages,fetchSentDirectMessages } from './api';

function Avatar(props) {
	return (
		<img className="Avatar"
  			src={props.user.profile_image_url_https}
  			alt={props.user.screen_name}
		/>
	);
}
 
function UserInfo(props){
	return(
		<div className="tweet-user">
			<div className="user-avatar">
		        <Avatar user={props.user} />
		    </div>
		    {props.user.verified && ( <div className="verified"></div> )}
			<span className="name">{props.user.name}</span>
			<span className="screenName">@{props.user.screen_name}</span>
		</div>
	);
}

class User extends Component {
	render() {
		// console.log(this.props);
		return (
			<div className="user-message" onClick={() => this.props.onClick(this.props.data.screen_name)}>
				<div className="user-message-contain">
					<UserInfo user={this.props.data} />

					{/* <div className="fi-arrow-right"></div> */}
				</div>
			</div>
		)
	}
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
	render() {
		const message = this.props.message;
		// console.log(message);
		var text = message.text;
		
		for (let i = message.entities.urls.length - 1; i >= 0; i--) {
			text = this.replaceAll(text,message.entities.urls[i].url,'<a class="url" href="'+ message.entities.urls[i].expanded_url +'">'+message.entities.urls[i].display_url+'</a>');
		}
		for (let i = message.entities.hashtags.length - 1; i >= 0; i--) {
			text = this.replaceAll(text,"#"+message.entities.hashtags[i].text,'<span class="hashtag">#'+message.entities.hashtags[i].text+'</span>');
		}
		for (let i = message.entities.user_mentions.length - 1; i >= 0; i--) {
			text = this.replaceAll(text,'@'+message.entities.user_mentions[i].screen_name,'<span class="user-mention" onClick="{() => this.props.onClick(\''+message.entities.user_mentions[i].screen_name+'\')}">@' + message.entities.user_mentions[i].screen_name+'</span>');
		}
		
	  	return (
			<p className="message-text" dangerouslySetInnerHTML={this.createMarkup(text)}></p>
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

		        <MessageBody message={this.props.data} />
		        
		        <RelativeTime created_at={this.props.data.created_at} />
			</div>
		)
	}
}

class DirectMessages extends Component {
	constructor(props) {
    	super(props);
    
	    gotTwitterLoginPromise().then((data) => {

	    	fetchDirectMessages((err, messages) => {
				for (var i = messages.length - 1; i >= 0; i--) {
      				messages[i].created_at_time = new Date(messages[i].created_at).getTime();
      			}

	    		this.setState({ 
        			messages
      			});
	    		
	    		let userMap = messages.map((obj) => (obj.sender));

	    		// TODO: sort this by time, and add the most recent message text in

	    		let keys = [];
	    		let users = [] // not optimal.. 
	    		// but lets just do this to get it working.
	    		for (var i = userMap.length - 1; i >= 0; i--) {
	    			if (keys.indexOf(userMap[i].screen_name) === -1) {
	    				users.push(userMap[i]);
	    				keys.push(userMap[i].screen_name);
	    			}
	    		}

	    		// console.log(keys,users);
	    		this.setState({
	    			users
	    		});
      		});

      		fetchSentDirectMessages((err, sentmessages) => {
      			for (var i = sentmessages.length - 1; i >= 0; i--) {
      				sentmessages[i].mine = true;
      				sentmessages[i].created_at_time = new Date(sentmessages[i].created_at).getTime();
      			}
	    		this.setState({ 
        			sentmessages
      			});
      		});
    	});
  	}
  	state = {
  		selectedMessages: [],
  		users: []
  	}
  	clearSelectedUser() {
  		this.setState({selectedUser:false});
  	}
  	handleChange(event) {
		this.setState({
			hasText: event.target.value,
		});
  	}
	setSelectedUser(id) {
		console.log('selected user',id);
		
		let selectedMessages = [];
		if (id) {
    		// mix the sent messages into messages.
    		let selectedSentMessages = this.state.sentmessages.filter((obj) => {
    			// console.log(obj);
    			return (obj.recipient_screen_name === id);
    		});

			selectedMessages = this.state.messages.filter((obj) => {
				return (obj.sender_screen_name === id);
			});
			selectedMessages = selectedMessages.concat(selectedSentMessages);
			// console.log(selectedMessages);

			selectedMessages = selectedMessages.sort((a,b) => {
				if (a.created_at_time < b.created_at_time)
			    	return 1;
			  	if (a.created_at_time > b.created_at_time)
			    	return -1;
			  	return 0;
			});
		}
		this.setState({selectedUser:id,selectedMessages: selectedMessages});

		// TODO: scroll to the bottom of the selected chat.
	}
	render() {
		const messages = this.state.selectedMessages;
		const users = this.state.users;
		return (
			<div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
				<div className={"messages-contain " + (this.state.selectedUser ? "" : "inactive")}>
					<div className="back-button" onClick={()=>this.clearSelectedUser()}><div className="fi-arrow-left"></div></div>
					<div className="messages-wrap">
						{messages.map((obj) => {
				            return (
				              	<Message 
				                key={obj.id_str}
				                data={obj} 
				                onClick={(screen_name)=>this.setSelectedUser(screen_name)}
				              	/>
				            )
						})}
					</div>
					<div className="input-wrap">
			        	<span className={"input-label " + (this.state.hasText ? "" : "full" )}>Message</span>
          				<input type="text" onChange={(event) => this.handleChange(event)} />
          				<button className="button send-button">Send</button>
			        </div>
				</div>
				<div className={"messages-list-contain " + (this.state.selectedUser ? "inactive" : "")}>
					{users.map((obj) => {
			            obj.selected = ( obj.id_str === this.state.selectedUser ? 'selected' : '' );
			            return (
			              	<User 
			                key={obj.id_str}
			                data={obj} 
			                onClick={(screen_name)=>this.setSelectedUser(screen_name)}
			              	/>
			            )
			        })}
				</div>
			</div>
		);
	}
}

export default DirectMessages;

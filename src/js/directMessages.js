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
			<div className="message">
				<div className="user-avatar">
			        <Avatar user={this.props.data.sender} />
			    </div>

		        <MessageBody message={this.props.data} />
			</div>
		)
	}
}

class DirectMessages extends Component {
	constructor(props) {
    	super(props);
    
	    gotTwitterLoginPromise().then((data) => {

	    	fetchDirectMessages((err, messages) => {
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
	setSelectedUser(id) {
		console.log('selected user',id);
		
		let selectedMessages = [];
		if (id) {
    		// TODO mix the sent messages into messages.
    		let selectedSentMessages = this.state.sentmessages.filter((obj) => {
    			console.log(obj);
    			return (obj.recipient_screen_name === id);
    		});

			selectedMessages = this.state.messages.filter((obj) => {
				return (obj.sender_screen_name === id);
			});
			selectedMessages = selectedMessages.concat(selectedSentMessages);
			console.log(selectedMessages);
		}
		this.setState({selectedUser:id,selectedMessages: selectedMessages});
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

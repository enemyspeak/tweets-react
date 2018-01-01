import React, { Component } from 'react';
import Message from './message';

import { gotTwitterLoginPromise,fetchDirectMessages,fetchSentDirectMessages } from './api';
import { UserInfo } from './common';

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

class DirectMessages extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
	  		selectedMessages: [],
	  		users: [],
	  		hasText: ""
	  	};
	    gotTwitterLoginPromise().then((data) => {

	    	fetchDirectMessages((err, messages) => {
				for (let i = messages.length - 1; i >= 0; i--) {
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
	    		for (let i = userMap.length - 1; i >= 0; i--) {
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
			    	return -1;
			  	if (a.created_at_time > b.created_at_time)
			    	return 1;
			  	return 0;
			});
		}
		this.setState({selectedUser:id,selectedMessages: selectedMessages});
	}
	setSelectedProfile(id) {
		this.setState({
			selectedProfile: id
		});
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
				                onClick={(screen_name)=>this.setSelectedProfile(screen_name)}
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

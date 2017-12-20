import React, { Component } from 'react';
import { gotTwitterLoginPromise,fetchDirectMessages } from './api';

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

class Message extends Component {
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
	    			if (keys.indexOf(userMap[i].screen_name) == -1) {
	    				users.push(userMap[i]);
	    				keys.push(userMap[i].screen_name);
	    			}
	    		}
	    		// console.log(keys,users);
	    		this.setState({
	    			users
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
		this.setState({selectedUser:id});

		if (id) {
			let selectedMessages = this.state.messages;
			console.log(selectedMessages);
		}
	}
	render() {
		const messages = this.state.selectedMessages;
		const users = this.state.users;
		return (
			<div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
				<div className={"messages-contain " + (this.state.selectedUser ? "" : "inactive")}>
					<div className="back-button" onClick={()=>this.clearSelectedUser()}><div className="fi-arrow-left"></div></div>
					{messages.map((obj) => {
						return (
							<div>{obj.id_str}</div>
						)
					})}
				</div>
				<div className={"messages-list-contain " + (this.state.selectedUser ? "inactive" : "")}>
					{users.map((obj) => {
			            obj.selected = ( obj.id_str === this.state.selectedUser ? 'selected' : '' );
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
		);
	}
}

export default DirectMessages;

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

class Message extends Component {
	render() {
		// console.log(this.props);
		return (
			<div className="user-message">
				<div className="user-message-contain">
					<UserInfo user={this.props.data} onClick={this.props.onClick} />
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
	setSelectedUser(id) {
		this.setState({selectedUser:id});
	}
	render() {
		const messages = this.state.selectedMessages;
		const users = this.state.users;
		return (
			<div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
				<div className={"messages-contain " + (this.state.selectedUser ? "" : "inactive")}>
					{messages.map((obj) => {
						return (
							<div></div>
						)
					})}
				</div>
				<div className={"messages-list-contain" + (this.state.selectedUser ? "inactive" : "")}>
					{users.map((obj) => {
			            obj.selected = ( obj.id_str === this.state.selectedUser ? 'selected' : '' );
			            return (
			              	<Message 
			                key={obj.id_str}
			                data={obj} 
			                onClick={()=>this.setSelectedMessage(obj.id_str)}
			              	/>
			            )
			        })}
				</div>
			</div>
		);
	}
}

export default DirectMessages;

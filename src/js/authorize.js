import React, { Component } from 'react';
import { getRequestToken } from './api';

class Authorize extends Component {
	constructor(props) {
		super(props)
		this.oauthWindow;
	}
	handleClick() {
		getRequestToken().then((data) => {
			console.log(data);
			var pos = {
				left: 400,
				top: 200
			}
			this.oauthWindow = window.open( 'https://api.twitter.com/oauth/authorize?oauth_token=' + data,'_blank','menubar=no,height=600,width=768,left='+pos.left+',top='+pos.top );
		});
	}
	render() {
		return (
			<div className="authorize-contain">
				<div className="authorize-background"></div>
				<div className="authorize-modal">
					<div className="fi-social-twitter"></div>
					<h1>Welcome to Squawk Box.</h1>
					<p>Before you can begin using Squawk Box, you need to connect your twitter account.</p>
					<button onClick={() => this.handleClick()}>Connect</button>
				</div>
			</div>
		);
	}
}

export default Authorize;
import React, { Component } from 'react';
import { getRequestToken,gotTwitterLoginPromise } from './api';

class Authorize extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalVisible: true,
			popupBlocked: false
		}
		gotTwitterLoginPromise().then((data) => {
			this.setState({
				modalVisible: false
			});
			this.closeOAuthWindow();
		})
	}
	closeOAuthWindow() {
		if (this.oauthWindow) {
            this.oauthWindow.close();
        }
	}
	
	handleClick() {
		getRequestToken().then((data) => {
			// console.log(data);
			this.oauthWindow = window.open( 'https://api.twitter.com/oauth/authorize?oauth_token=' + data,'_blank','menubar=no,height=600,width=768');
			if (this.oauthWindow === null) {
				console.log('blocked probably');
				this.setState({
					requestToken: data,
					popupBlocked: true
				});
			}
		});
	}
	render() {
		return (
			<div className={"authorize-contain " + (this.state.modalVisible ? "visible" : "" )}>
				<div className="authorize-background"></div>
				<div className="authorize-modal">
					<div className="fi-social-twitter"></div>
					<h1>Welcome to Squawk Box.</h1>
					<p>Before you can begin using Squawk Box, you need to connect your twitter account.</p>
					<button onClick={() => this.handleClick()}>Connect</button>
					{ this.state.popupBlocked && (
						<div className="authorize-popupblocked">
							<a href={"https://api.twitter.com/oauth/authorize?oauth_token="+this.state.requestToken} target="_blank">Click here if the window didn't open.</a>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Authorize;
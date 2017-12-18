import React, { Component } from 'react';

class Authorize extends Component {
	render() {
		return (
			<div className="authorize-contain">
				<div className="authorize-background"></div>
				<div className="authorize-modal">
					<div className="fi-social-twitter"></div>
					<h1>Welcome to Squawk Box.</h1>
					<p>Before you can begin using the twitter app, you need to connect your twitter account.</p>
					<button>Connect</button>
				</div>
			</div>
		);
	}
}

export default Authorize;
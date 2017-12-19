import React, { Component } from 'react';

class Authorize extends Component {
	handleClick() {
		// App.socket.emit('get twitter request token',{},function(feedbackType,opts) {
	 //        console.log(feedbackType,opts);
	 //        self.$el.find('.connectLoader').addClass('inactive');
	 //        if (feedbackType == 'error') {
	 //            console.log('failed to get twitter request token',data.error);
	 //            return;
	 //        }
	 //        // var data = self.parseResponse(feedbackType);
	 //        var data = feedbackType;
	 //        var pos = self.$el.position();
	 //        // this.aouthWindow = window.open( 'https://auth.qbeats.com/?response_type=code&client_id=G50RmsRf3jWLEG&scope=read write&redirect_uri=https://leveltradingfield.com/level/qbeats','_blank','menubar=no,height=600,width=768,left='+pos.left+',top='+pos.top );
	 //        self.aouthWindow = window.open( 'https://api.twitter.com/oauth/authorize?oauth_token=' + data.oauth_token,'_blank','menubar=no,height=600,width=768,left='+pos.left+',top='+pos.top );
	 //        self.$el.find('.popupMessage').removeClass('hidden');
	 //    });
	}
	render() {
		return (
			<div className="authorize-contain">
				<div className="authorize-background"></div>
				<div className="authorize-modal">
					<div className="fi-social-twitter"></div>
					<h1>Welcome to Squawk Box.</h1>
					<p>Before you can begin using the twitter app, you need to connect your twitter account.</p>
					<button onclick={() => this.handleClick()}>Connect</button>
				</div>
			</div>
		);
	}
}

export default Authorize;
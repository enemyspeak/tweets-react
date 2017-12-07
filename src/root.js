import React, { Component } from 'react';

import Timeline from './timeline'
import Navigation from './navigation'

class Root extends Component {
	render() {
		return (
			<div>
				<div className="HeaderRow">
					Twitter App
				</div>
				<div className="NavigationContain">
					<Navigation />
				</div>
				<div className="AppContain">
					<Timeline />
					{/* <Mentions /> */}
					{/* <DMS /> */}
					{/* <Profile /> */}
					{/* <Search /> */}
				</div>
			</div>
        );
	}
}

export default Root;

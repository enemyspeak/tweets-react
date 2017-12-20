import React, { Component } from 'react';
// import Tweet from './tweet';

class Search extends Component {
	render() {
		return (
			<div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
				<div className="search-contain">
		 
				</div>
			</div>
		);
	}
}

export default Search;

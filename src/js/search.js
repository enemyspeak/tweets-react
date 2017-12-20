import React, { Component } from 'react';
import Tweet from './tweet';
import { searchTweets } from './api';

class Search extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		selectedTweet: false, 
    		searchTerm: '',
    		searchResults: {
    			statuses: []
    		}
    	};
    }
    setSelectedTweet(id) {
  		// console.log(id);
  		this.setState({selectedTweet:id});
  	}
	handleChange(event) {
		this.setState({
			searchTerm: event.target.value,
			searchResults: { statuses: [] } 
		});
		setTimeout(() => { // set timeout to throttle typing
			// console.log(this.state.searchTerm);
			searchTweets(this.state.searchTerm).then((data) => {
				// console.log(data);
				this.setState({searchResults: data});
			}).catch((error) => {
				// console.log(error);
			});
   		},600);
  	}
	render() {
		const results = this.state.searchResults.statuses;
		return (
			<div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
				<div className="search-contain">
		 			{ this.state.searchTerm && (
		 				<div className={"dataLoader " + (this.state.searchResults ? "inactive" : "") }></div>
		 			)}
			        {results.map((obj) => {
			            obj.selected = ( obj.id_str === this.state.selectedTweet ? 'selected' : '' );
			            return (
		              		<Tweet 
			                key={obj.id_str}
			                data={obj} 
			                onClick={()=>this.setSelectedTweet(obj.id_str)}
			                mentionHandler={(screen_name)=>this.setSelectedUser(screen_name)} 
			              	/>
			            )
			        })}
				</div>
				<div className="search-form-contain">
					<span className={"input-label " + (this.state.searchTerm ? "" : "full" )}>Search</span>
          			<input type="text" value={this.state.searchTerm} onChange={(event) => this.handleChange(event)} />
				</div>
			</div>
		);
	}
}

export default Search;

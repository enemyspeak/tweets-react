import React, { Component } from 'react';
import Tweet from './tweet'
import { fetchHomeTimeline } from './api';

class Timeline extends Component {
	constructor(props) {
  	super(props);
    fetchHomeTimeline((err, timeline) => this.setState({ 
      timeline 
    }));
  }
  state = {
    selectedTweet: false,
    timeline: []
  };
  setSelectedTweet(id) {
  	// console.log(id);
  	this.setState({selectedTweet:id});
  }
  renderTweet(props){
    if (!props) return;
		props.selected = ( props.id_str === this.state.selectedTweet ? 'selected' : '' );
    console.log(props);
		return (
      <Tweet 
        data={props} 
        onClick={()=>this.setSelectedTweet(props.id_str)} 
      />
    );
	}
	render() {
     const timeline = this.state.timeline;
    console.log(timeline);
    return (
      <div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
        <div className="view-header-label">{this.props.timelineName}</div>
        <div className="timeline-contain">
          {timeline.map((obj) => {
            obj.selected = ( obj.id_str === this.state.selectedTweet ? 'selected' : '' );

            return (
              <Tweet 
                data={obj} 
                onClick={()=>this.setSelectedTweet(obj.id_str)} 
              />
            )
          })}
        </div>
      </div>
    );
	}
}
//             {this.renderTweet(obj)}

 // {this.state.timeline.map(obj => {
 //            {this.renderTweet(obj)}
 //          })}

export default Timeline;

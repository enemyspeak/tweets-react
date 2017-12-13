import React, { Component } from 'react';
import Tweet from './tweet'

class Timeline extends Component {
	constructor(props) {
  	super(props);
    this.props.dataSource((err, timeline) => this.setState({ 
      timeline 
    }));
    if (this.props.stream) {
      this.props.stream((err, tweet) => {
          console.log(tweet);
          let timeline = this.state.timeline;
          timeline.unshift(tweet);
          this.setState({ 
            timeline
          })
        }
      );
    }
  }
  state = {
    selectedTweet: false,
    timeline: []
  };
  setSelectedTweet(id) {
  	console.log(id);
  	this.setState({selectedTweet:id});
  }
  render() {
    const timeline = this.state.timeline;
    return (
      <div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
        {/*<div className="view-header-label">{this.props.timelineName}</div>*/}
        <div className="timeline-contain">
          {timeline.map((obj) => {
            obj.selected = ( obj.id_str === this.state.selectedTweet ? 'selected' : '' );
            return (
              <Tweet 
                key={obj.id_str}
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

export default Timeline;

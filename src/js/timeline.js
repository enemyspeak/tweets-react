import React, { Component } from 'react';
import Tweet from './tweet'
import Profile from './profile'

class Timeline extends Component {
	constructor(props) {
  	super(props);
    this.props.dataSource((err, timeline) => this.setState({ 
      timeline 
    }));

    if (this.props.stream) {
      this.props.stream((err, tweet) => {
          // console.log(tweet);
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
    selectedUser: false,
    timeline: []
  };
  setSelectedUser(id) {
    console.log(id);
    this.setState({selectedUser:id});
  }
  clearSelectedUser() {
    this.setState({selectedUser:false});
  }
  setSelectedTweet(id) {
  	// console.log(id);
  	this.setState({selectedTweet:id});
  }
  render() {
    const selectedUser = this.state.selectedUser;
    // console.log(selectedUser);
    const timeline = this.state.timeline;
    return (
      <div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
        <div className={"profile-contain " + (selectedUser ? "" : "inactive")}>
          <Profile 
            selectedUser={selectedUser}
            clearSelectedUser={()=>this.clearSelectedUser()} 
            showBackButton={true} 
            activeTab={true} 
          />
        </div>
        <div className={"timeline-contain " + (selectedUser ? "inactive" : "")}>
          {timeline.map((obj) => {
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
      </div>
    );
	}
}

export default Timeline;

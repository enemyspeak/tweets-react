import React, { Component } from 'react';
import Tweet from './tweet'
import Profile from './profile'
import { gotTwitterLoginPromise } from './api';

class Timeline extends Component {
	constructor(props) {
  	super(props);
    
    gotTwitterLoginPromise().then((data) => {
      this.props.dataSource((err, timeline) => this.setState({ 
        timeline 
      }));
    });

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
    // console.log(id);
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
    console.log('timeline',this.state.selectedUser);
    const timeline = this.state.timeline;

    return (
      <div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
        <div className={"profile-parent-contain " + (this.state.selectedUser ? "visible" : "inactive")}>
          {this.state.selectedUser && (
            <Profile 
              selectedUser={this.state.selectedUser}
              clearSelectedUser={()=>this.clearSelectedUser()} 
              showBackButton={true} 
              activeTab={this.state.selectedUser} 
            />
          )}
        </div>
        <div className={"timeline-contain " + (this.state.selectedUser ? "inactive" : "")}>
          <div className={"dataLoader " + (timeline.length ? "inactive" : "")}></div>

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

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Tweet from './tweet'
import { gotTwitterLoginPromise, fetchUserByName } from './api';

class Profile extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    gotTwitterLoginPromise().then((data) => {
      // if (this.props.activeTab) {
        fetchUserByName(this.props.selectedUser).then((profile) => {
          ReactDOM.findDOMNode(this).scrollIntoView(); // this should only run when the profile changes.
          this.setState({ 
            profile: profile
          })
        }).catch(function() {});
      // }
    });
  }
  state = {
    selectedTweet: false,
    // selectedUser: false,
  };
  // componentDidUpdate = () => { 
  //   // NOTE: this will scroll everything to the top when you change tabs..
  //   ReactDOM.findDOMNode(this).scrollIntoView(); 
  // }

  // componentWillMount() {
  //   // this.setState({selectedUser:this.props.selectedUser});
  // }
  setSelectedUser(id) {
    // console.log(id);
    if (id === this.props.selectedUser) return;
  	this.setState({selectedUser:id}); // this is recursion.
  }
  clearSelectedUser() {
    this.setState({selectedUser:false}); // this is recursion. 
  }
  setSelectedTweet(id) {
    // console.log(id);
    this.setState({selectedTweet:id});
  }
  followUser(id) {

  }
  unfollowUser(id) {
    
  }
	render() {
    var profile = this.state.profile;

    if (!profile) {
      return (
        <div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
          <div className="profile-contain">
            {this.props.showBackButton && ( <div className="back-button" onClick={()=>this.props.clearSelectedUser()}><div className="fi-arrow-left"></div></div>)}
            <div className="dataLoader"></div>
          </div>
        </div>
      );
    }

    let bannerStyle = {
      background: 'url(' +  (profile.profile_use_background_image ? profile.profile_background_image_url_https : profile.profile_banner_url) + ') no-repeat 50% 50% / cover',
    };

    return (
      <div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
      	<div className={"sub-profile-contain " + (this.state.selectedUser ? "visible" : "")}>
          {/* this is where we're recursively adding profile */}
          {this.state.selectedUser && ( 
            <Profile 
              selectedUser={this.state.selectedUser}
              clearSelectedUser={()=>this.clearSelectedUser()} 
              showBackButton={true} 
              activeTab={this.state.selectedUser} 
            />
          )}
        </div>
        <div className={"profile-contain " + (this.state.selectedUser ? "" : "visible")}>
          {this.props.showBackButton && ( <div className="back-button" onClick={()=>this.props.clearSelectedUser()}><div className="fi-arrow-left"></div></div>)}
          <div className="user-banner" style={bannerStyle}></div>
          <div className="user-avatar profile-avatar">
            <img src={profile.profile_image_url_https} alt={profile.screen_name} />
          </div>
          {profile.verified && ( <div className="profile-verified"></div> )}
          {profile.protected && ( <div className="profile-protected"><div className="fi-lock"></div></div> )}

          {profile.following ? (<span className="follow-button following">Following</span>) : (<span className="follow-button" onClick={()=>this.props.followUser(profile.id_str)}>Follow</span>)}
          <div className="profile-details">
            <span className="name">{profile.name}</span>
            <span className="screen-name">@{profile.screen_name}</span>
            <span className="description">{profile.description}</span>
            <span className="location">{profile.location}</span>
            <div className="stat-contain">
              <span className="profile-stat followers">{profile.followers_count} Followers</span>
              <span className="profile-stat following">{profile.friends_count} Following</span>
            </div>
          </div>
          <div className="recent-timeline-contain">
            {profile.timeline && (profile.timeline.map((obj) => {
              obj.selected = ( obj.id_str === this.state.selectedTweet ? 'selected' : '' );
              return (
                <Tweet 
                  key={obj.id_str}
                  data={obj} 
                  onClick={()=>this.setSelectedTweet(obj.id_str)} 
                  mentionHandler={(id)=>this.setSelectedUser(id)} 
                />
              )
            }))}
          </div>
      	</div>
      </div>
    );
	}
}

export default Profile;

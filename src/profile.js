import React, { Component } from 'react';
import Tweet from './tweet'
import { fetchUserByName } from './api';


class Profile extends Component {
	constructor(props) {
  	super(props);
  	this.state = {selectedUser: '@hannufluff'};

    fetchUserByName(this.state.selectedUser,(err, profile) => this.setState({ 
      profile 
    }));
  }
  state = {
    selectedTweet: false,
    selectedUser: false,
    profile: {
      'timeline':[]
    },
  };
  setSelectedUser(id) {
    console.log(id);
  	this.setState({selectedUser:id});
  }
  setSelectedTweet(id) {
    console.log(id);
    this.setState({selectedTweet:id});
  }
	render() {
    const profile = this.state.profile;

    if (!profile) {
      return (
        <div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
          <div className="profile-contain"></div>
        </div>
      );
    }

    let bannerStyle = {
      background: 'url(' +  (profile.profile_use_background_image ? profile.profile_background_image_url_https : profile.profile_banner_url) + ') no-repeat 50% 50% / cover',
    };

    return (
      <div className={"twitter-app " + (this.props.activeTab ? "" : "inactive")}>
      	<div className="profile-contain">
          <div className="user-banner" style={bannerStyle}></div>
          <div className="user-avatar profile-avatar">
            <img src={profile.profile_image_url_https} alt={profile.screen_name} />
          </div>
          {profile.following ? (<span className="follow-button following">Following</span>) : (<span className="follow-button">Follow</span>)}
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
                  mentionHandler={()=>this.setSelectedUser(obj.user.screen_name)} 
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

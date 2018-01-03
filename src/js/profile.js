import React, { Component } from 'react';

import Timeline from './timeline'
import { gotTwitterLoginPromise, fetchUserByName,followUser,unfollowUser,blockUser,unblockUser } from './api';
import { DropdownMenu } from './common'

class ProfileDetails extends Component {
  render() {
    const profile = this.props.profile;

    return (
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
    );
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTweet: false,
      bannerVisible: false,
      showMenu: false,
      blocked: false,
      // selectedUser: false,
    };
    if (this.props.testdata) { // injection point for profile.test
      this.state ={
        selectedTweet: false,
        bannerVisible: false,
        showMenu: false,
        blocked: false, // TODO: we need to fetch blocked users at login and then check ids to find this value
        profile: this.props.testdata
      };
    } else {
      gotTwitterLoginPromise().then((data) => {
        fetchUserByName(this.props.selectedUser).then((profile) => {
          // ReactDOM.findDOMNode(this).scrollIntoView(); // this should only run when the profile changes. // FIXME: this breaks the overlay stuff!
          this.setState({ 
            profile: profile,
            following: profile.following
          })
        }).catch(function() {});
      });
    }
  }
  
  // componentDidUpdate = () => { 
  //   // NOTE: this will scroll everything to the top when you change tabs..
  //   ReactDOM.findDOMNode(this).scrollIntoView(); 
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
    followUser(id).then(() => this.setState({following: true})).catch((err)=> console.error(err));
  }
  unfollowUser(id) {
    unfollowUser(id).then(() => this.setState({following: false})).catch((err)=> console.error(err)); 
  }
  createReply() {
    // TODO
  }
  createDirectMessage() {
    // TODO
  }
  handleMenuToggle(event) {
    event.stopPropagation();
    this.setState({showMenu: !this.state.showMenu});
  }
  hideMenu() {
    this.setState({showMenu: false}); 
  }
  toggleBanner() {
    this.setState({bannerVisible: !this.state.bannerVisible});
  }
  showBanner() {
    this.setState({bannerVisible: true});
  }
  hideBanner() {
    this.setState({bannerVisible: false}); 
  }
  toggleBlockUser(id) {
    if (this.state.blocked) {
      this.unblockUser(id);  
    } else {
      this.blockUser(id);
    }
  }
  blockUser(id) {
    blockUser(id).then(() => this.setState({blocked: true})).catch((err)=> console.error(err));
  }
  unblockUser(id){
    unblockUser(id).then(() => this.setState({blocked: false})).catch((err)=> console.error(err));
  }
	render() {
    var profile = this.state.profile;
    let following = this.state.following;
    let blocked = this.state.blocked;

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
      background: 'url(' + profile.profile_banner_url + ') no-repeat 50% 50% / cover',
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
        <div className={"profile-contain " + (this.state.selectedUser ? "" : "visible")} onClick={() => this.hideMenu()}>
          <div className={"user-banner " + (this.state.bannerVisible ? "visible" : "") } style={bannerStyle}></div>

          {this.props.showBackButton && ( <div className="back-button" onClick={()=>this.props.clearSelectedUser()}><div className="fi-arrow-left"></div></div>)}
          
          <div className="profile-controls">
            <button className="show-banner" 
              onMouseEnter={() => this.showBanner()}
              onMouseLeave={() => this.hideBanner()}
            >
              <div className="fi-magnifying-glass"></div>
            </button>
            <button className="reply" onClick={() => this.createReply()}>
              <div className="fi-comment-quotes"></div>
            </button>
            <button className="direct-message" onClick={() => this.createDirectMessage()}>
              <div className="fi-mail"></div>
            </button>
            <button className={"menu " + (this.props.showMenu ? "active" : "")} onClick={(event) => this.handleMenuToggle(event)}>
              <div className="fi-widget"></div>
            </button>
          </div>

          <DropdownMenu 
            visible={!this.state.selectedUser && this.state.showMenu}
            profile={profile} 
            hideMenu={() => this.hideMenu()}
            blockUser={() => this.toggleBlockUser(profile.id_str)}
          />
     
          <div className="user-avatar profile-avatar">
            <img src={profile.profile_image_url_https} alt={profile.screen_name} />
          </div>
          {profile.verified && ( <div className="profile-verified"></div> )}
          {profile.protected && ( <div className="profile-protected"><div className="fi-lock"></div></div> )}
          {blocked && ( <div className="profile-blocked"><div className="fi-prohibited"></div></div> )}

          {following ? (<span className="follow-button following" onClick={()=>this.props.unfollowUser(profile.id_str)}>Following</span>) : (<span className="follow-button" onClick={()=>this.props.followUser(profile.id_str)}>Follow</span>)}

          <ProfileDetails 
            profile={profile}
          />

          <div className="recent-timeline-contain">
            {profile.timeline && (
              // profile.timeline.map((obj) => {
              // obj.selected = ( obj.id_str === this.state.selectedTweet ? 'selected' : '' );
              //   return (
              //     <Tweet 
              //       key={obj.id_str}
              //       data={obj} 
              //       onClick={()=>this.setSelectedTweet(obj.id_str)} 
              //       mentionHandler={(id)=>this.setSelectedUser(id)} 
              //     />
              //   )
              // })
              <Timeline 
                dataSource={(cb) => cb(null,profile.timeline)} 
                activeTab={true} 
                mentionHandler={(id)=>this.setSelectedUser(id)} 
              /> 
            )}
          </div>
      	</div>
      </div>
    );
	}
}

export default Profile;

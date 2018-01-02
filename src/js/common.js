import React, { Component } from 'react';

function Avatar(props) {
	return (
		<img className="Avatar"
  			src={props.user.profile_image_url_https}
  			alt={props.user.screen_name}
		/>
	);
}

function UserInfo(props){
    return(
        <div className="tweet-user">
            <div className="user-avatar" onClick={() =>{if (props.onClick) props.onClick(props.user.screen_name)}}>
                <Avatar user={props.user} />
            </div>
            {props.user.verified && ( <div className="verified"></div> )}
            <span className="name" onClick={() =>{if (props.onClick) props.onClick(props.user.screen_name)}}>{props.user.name}</span>
            <span className="screenName" onClick={() =>{if (props.onClick) props.onClick(props.user.screen_name)}}>@{props.user.screen_name}</span>
        </div>
    );
}

function VideoMedia(props) {
	// TODO load video's bitrate responsive to size of viewport
	let index = 0;
	const variants = props.obj.video_info.variants;
	const bitrate_max = 832000;
	// const viewport = 300;
	const loop = (props.obj.type === "animated_gif" ? true : false );

	for (var i = variants.length - 1; i >= 0; i--) {
		if ((variants[i].content_type === "video/mp4") && (variants[i].bitrate < bitrate_max)) {
			index = i;
		}
	}
	return (
		<video controls loop={loop} poster={props.obj.media_url_https + ":small"} src={variants[index].url} type={variants[index].content_type} >
			{ /* {obj.video_info.variants.map(source => {
				return (
		    		<source src={source.url} type={source.content_type} />
		    	);
		    } */}
		</video>
	)
}

function Media(props) {
	// TODO load image size responsive to size of viewport
	// const viewport = 300;
	// const length = props.media.length;
	return (
		<div className="media-contain">
	        {props.media.map(obj => {
            	return (
            		<div className="media-box" key={obj.id_str}>
						{(obj.type === "video" || obj.type === "animated_gif") && (
							<VideoMedia obj={obj} />
						)}
						{(obj.type === "photo") && (
							<img src={obj.media_url_https + ":small"} alt={obj.display_url} />	
						)}
					</div>
				);
	        })}
		</div>
	);
}

class RelativeTime extends Component {
	relativeTime() {
		// console.log(this.props);
		let time = this.props.created_at;

	 	if (!time) return;

	    // let day,month,year;
	    let date = new Date(time),
	        diff = ( (( new Date().getTime() ) - date.getTime()) / 1000),
	        // day_diff = ( new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()).getTime() - new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime() ) / 1000 / 86400, //
	        day_diff = Math.floor(diff / 86400);
	    
	    if (isNaN(day_diff) || diff <= 0)
	        return (
	        	"now"
	            // year.toString()+'-'+
	            // ((month<10) ? '0'+month.toString() : month.toString())+'-'+
	            // ((day<10) ? '0'+day.toString() : day.toString())
	        );
	    
	    var r = (
	        diff > 0 &&
	        (
	        	// eslint-disable-next-line
	            day_diff === 0 &&
	            (
	                (
	                    (diff < 60 && Math.ceil(diff) + "s") ||
	                    (diff < 3600 && Math.ceil(diff / 60)  + "m") ||
	                    (diff < 7200 && "1h") ||
	                    (diff < 86400 && Math.floor(diff / 3600) + "h")
	                )
	            // eslint-disable-next-line
	            ) ||
	            (day_diff === 1 && "1d") ||
	            (Math.ceil(day_diff) + "d")
	        )
	    );
	    // console.log(r);
	    return r;
	}
   	render() {
   		// console.log(this);
		return (
			<span className="tweet-date">{this.relativeTime()}</span>
		) // 
   	}
}

export  { UserInfo,Avatar,Media,RelativeTime };
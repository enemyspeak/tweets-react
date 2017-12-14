import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000');

function fetchHomeTimeline(cb) {
  	socket.emit('gethometimeline',{},function(data) {
  		// console.log(data);
  		if (!data) {
			cb(null, []);
  			return;
  		}
  		// return data;
  		cb(null, data);
  	});
}

function subscribeToHomeTimeline(cb) {
	socket.on('hometweet',function(data){
		if (!data) {
			cb(null, []);
  			return;
  		}
  		// return data;
  		cb(null, data);
	})
}

function fetchMentions(cb) {
  	socket.emit('getmentions',{},function(data) {
  		// console.log(data);
  		if (!data) {
			cb(null, []);
  			return;
  		}
  		// return data;
  		cb(null, data);
  	});
}

// returns your profile
function fetchHomeUser(cb) {
  	socket.emit('gethomeuser',{},function(data) {
  		// console.log(data);
  		if (!data) {
			cb(null, []);
  			return;
  		}
  		// return data;
  		cb(null, data);
  	});
}
// function fetchHomeUserTimeline(cb) {
//   	socket.emit('gethomeusertimeline',{},function(data) {
//   		// console.log(data);
//   		if (!data) {
// 			cb(null, []);
//   			return;
//   		}
//   		// return data;
//   		cb(null, data);
//   	});
// }

// returns details & timeline of user in user_id
function fetchuser(id,cb) {
  	socket.emit('getuser',{user_id: id},function(data) {
  		// console.log(data);
  		if (!data) {
			cb(null, []);
  			return;
  		}
  		// return data;
  		cb(null, data);
  	});
}

function fetchUserByName(screen_name,cb) {
	console.log(screen_name);
	if (!screen_name){ 
		cb(null, undefined);
		return
	};
	socket.emit('getuser',{screen_name:screen_name},function(data) {
  		console.log(data);
  		if (!data) {
			cb(null, undefined);
  			return;
  		}
  		// return data;
  		cb(null, data);
  	});
}

function favoriteTweet(id,cb) {
  console.log(id);
  if (!id){ 
    cb(null, undefined);
    return
  };
  socket.emit('favoritetweet',{id:id},function(data) {
      console.log(data);
      if (!data) {
      cb(null, undefined);
        return;
      }
      // return data;
      cb(null, data);
    });
}


export { fetchHomeTimeline, fetchMentions, fetchHomeUser,subscribeToHomeTimeline,fetchUserByName,favoriteTweet };
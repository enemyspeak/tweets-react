import openSocket from 'socket.io-client';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// prod
// const socket = openSocket('http://138.197.170.47:4000');
// dev
const socket = openSocket('http://localhost:4000'); 

// read cookie and check token
function doSessionToken(cb) {
  console.log('my token',cookies.get('user')); //
  let cookiedata = cookies.get('user')


  var getToken = function() {
    socket.emit('getToken',{},function(data) {
      console.log('get token',data);
      cookies.set('user', data, { path: '/' });
    });
  }

  if (cookiedata) {
    socket.emit('checkToken',cookiedata.token,function(data) {
      console.log(data);
      if (data === 'bad format') { // if error:
        console.log('token rejected');
        getToken();
        return;
      } 

      console.log('token accepted',data);
      // ok we know who you are..

    });
  } else {
    getToken();
  }
}

doSessionToken();

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

// // returns your profile
// function fetchHomeUser(cb) {
//   	socket.emit('gethomeuser',{},function(data) {
//   		// console.log(data);
//   		if (!data) {
// 			cb(null, []);
//   			return;
//   		}
//   		// return data;
//   		cb(null, data);
//   	});
// }
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

// // returns details & timeline of user in user_id
// function fetchuser(id,cb) {
//   	socket.emit('getuser',{user_id: id},function(data) {
//   		// console.log(data);
//   		if (!data) {
// 			cb(null, []);
//   			return;
//   		}
//   		// return data;
//   		cb(null, data);
//   	});
// }

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
  // console.log(id);
  return new Promise(function(resolve, reject) {
    if (!id){ 
      reject('no id!');
    };
    socket.emit('favoritetweet',{id:id},function(err,data) {
      if (err) {
        reject(err)
      } else {
        resolve();
        console.log(data);
      }
    });
  });
}

function unfavoriteTweet(id,cb) {
  return new Promise(function(resolve, reject) {
    if (!id){ 
      reject('no id!');
    };
    socket.emit('unfavoritetweet',{id:id},function(err,data) {
      if (err) {
        reject(err)
      } else {
        resolve();
        console.log(data);
      }
    });
  })
}


export { doSessionToken, fetchHomeTimeline, fetchMentions,subscribeToHomeTimeline,fetchUserByName,favoriteTweet,unfavoriteTweet };
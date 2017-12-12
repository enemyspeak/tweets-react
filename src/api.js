import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:4000');

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

// returns details & timeline of user in screen_name or user_id
function fetchuser(cb) {
  	socket.emit('getuser',{},function(data) {
  		// console.log(data);
  		if (!data) {
			cb(null, []);
  			return;
  		}
  		// return data;
  		cb(null, data);
  	});
}


export { fetchHomeTimeline, fetchMentions, fetchHomeUser };
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

export { fetchHomeTimeline };
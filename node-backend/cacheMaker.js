
function makeHashKey(args){
	var ret="h";
	for (var n=0;n<args.length;n++){
		var subVal=args[n];
		var subValString;
		if (subVal!==null && subVal!==undefined) subValString=subVal.toString();
		else subValString=' ';
		ret+="|"+subValString.replace(/\|/g,"||");
	}
	return ret;
}

function makeCacheFunction(timeout_time,fn){
	/*
		takes a regular function fn, and turns it into a function which keeps an in memory cache, which times out
		after timeout_time seconds
	*/

	var cache={};

	function countdownToInvalidate(key){
		setTimeout(function(){
			//console.log("invalidated",key);
			delete cache[key];
		},timeout_time*1000);
	}

	return function(){
		var hashKey=makeHashKey(arguments);
		if (!cache[hashKey]) {
			cache[hashKey]=fn.apply(this,arguments);
			//console.log("cached",hashKey);
			if (!isNaN(timeout_time) && timeout_time) countdownToInvalidate(hashKey);
		}
		return cache[hashKey];
	}
}



module.exports={makeCacheFunction:makeCacheFunction};
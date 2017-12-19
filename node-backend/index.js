var request = require('request');
var express = require('express');
var Promise  = require('promise');
var bodyParser = require('body-parser');
var Twitter = require('twitter');
var credentials = require('./twittercredentials.json');
var cacheMaker = require("./cacheMaker");
var uuid=require('uuid');
var CryptoJS = require('crypto-js');
var cookie = require('cookie');

var port = 4000;

start( port );

function start( port ){
    var app = express();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);
    var ss = require('socket.io-stream');
    io.set('transports', ['websocket', 'polling']);

    console.log('This process is pid', process.pid );

    app.use( bodyParser.json() ); // for parsing application/json
    app.use( bodyParser.urlencoded( { extended: true } ) ); // for parsing application/x-www-form-urlencoded
    app.enable('trust proxy');

    /*   ==================================================
    /    ============== webhooks & callbacks ==============
    /    ==================================================
    */

    var createToken = function(){
        //create a unique token
        var uniqueToken=uuid.v1();
        return uniqueToken;
    }

    var percentEncode = function(str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
    }

    var parseTwitterResponse = function(raw) {
        if (!raw) return raw;
        // var raw = 'oauth_token=dc3ufQAAAAAAxv8zAAABXI6eNFY&oauth_token_secret=ec69l98KkIl9OP8p6CEPEszzAQdwogq8&oauth_callback_confirmed=true';
        raw = raw.split('&');
        var data = {};
        var temp;
        for (var i in raw) {
            temp = raw[i].split('=');
            data[temp[0]]=temp[1];
        }
        console.log(data);
        return data;
    }

    app.all('*', function( req, res, next ){
        console.log(req.url);
        res.type( 'application/json' );
        console.log( req.method, req.url );
        next();
    });

    app.get('/', function(req, res) {
        res.send('enemyspeak backend');
    });

    app.get('/css/auth.css',serveFile('css/auth.css','text/css'));

    app.get('/twitter',function(req,res){ // twitter oauth callback uri - used in getting an oauth_token
        // console.log('twitter req',req);
        // console.log('twitter res',res)
        console.log('twitter cookie',req.headers.cookie);

        if (req.query.error) {
            console.log('twitter error found!',req.query);
            res.status( 400 ); // display error in pop up window
            res.send( '<html>\r\n\r\n<body bgcolor="white">\r\n<center><h1>Account connection failed.</h1></center>\r\n<hr>\r\n</body>\r\n</html>\r\n');            
            return;
        }

        var data = req.query; //parseTwitterResponse(req.query);
        
        console.log(data);

        // get the user token from the cookie.
        var token;
        if (req && req.headers && req.headers && req.headers.cookie) {
            var str = req.headers.cookie;
            str = cookie.parse(str); // parse cookie.
            token = str.loginInfo
            console.log('cookie token',token);
        } else {
            console.log('twitter err: no cookie found?');

            // display error in pop up window
            res.status( 400 );
            res.send( '<html>\r\n\r\n<body bgcolor="white">\r\n<center><h1>Account connection failed.</h1></center>\r\n<hr>\r\n</body>\r\n</html>\r\n');
            return;
        }
        if (!token) {
            console.log('twitter err: no user token');

            // display error
            res.status( 400 );
            res.send( '<html>\r\n\r\n<body bgcolor="white">\r\n<center><h1>Account connection failed.</h1></center>\r\n<hr>\r\n</body>\r\n</html>\r\n');
            return;
        }

        console.log('header ip',req.headers['x-forwarded-for']);

        // look up the user -
        console.log("twitter got user data",fetchedUserData.id);//,fetchedUserData);
        var userData = fetchedUserData; // save user data per socket session

        var oauth_token = data.oauth_token;
        var oauth_verifier = data.oauth_verifier;

        // test if oauth_token or oauth_verifier exist.
        console.log(oauth_token,oauth_verifier);

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        var nonce = s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
        nonce = new Buffer( nonce ).toString('base64');
        var timestamp = Math.round((new Date()).getTime() / 1000.0);//new Date().getTime();
        var parameters =
            'oauth_consumer_key='+percentEncode(credentials.twitter.consumer_key)+
            '&oauth_nonce='+percentEncode(nonce)+
            '&oauth_signature_method='+percentEncode('HMAC-SHA1')+
            '&oauth_timestamp='+percentEncode(timestamp)+
            '&oauth_token='+percentEncode(oauth_token)+
            '&oauth_version='+percentEncode('1.0');
        var base = 'POST'+'&'+percentEncode('https://api.twitter.com/oauth/access_token')+'&'+percentEncode(parameters);
        var signingKey = percentEncode(credentials.twitter.consumer_secret)+'&';//+percentEncode(OAuth token secret);
        var signiture = CryptoJS.HmacSHA1(base, signingKey);
        signiture = CryptoJS.enc.Base64.stringify(signiture);

        // console.log('twitter header',base,signingKey,signiture);
        // console.log('twitter signiture',percentEncode(signiture));

        request.post({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'OAuth ' + 
                                            'oauth_consumer_key="'+percentEncode(credentials.twitter.consumer_key)+'", '+
                                            'oauth_nonce="'+percentEncode(nonce)+'", '+
                                            'oauth_signature="'+percentEncode(signiture)+'", '+
                                            'oauth_signature_method="'+percentEncode('HMAC-SHA1')+'", '+
                                            'oauth_timestamp="'+percentEncode(timestamp)+'", '+
                                            'oauth_token='+percentEncode(oauth_token)+'", '+
                                            'oauth_version="'+percentEncode('1.0')+'"'
            },
            url: 'https://api.twitter.com/oauth/access_token',
            form:  {
                oauth_verifier: oauth_verifier
            },
            method: 'POST'
        },function(error, response, body){
            // console.log(error,response,body);
            // return;
            var data = body;
            // try {
            //     data = JSON.parse(body)
            // } catch (e) {
            //     // console.log('twitter parse error',e);
            //     // if (cb) cb('error');
            // }
            // console.log(data);
            // var data = JSON.parse(body);
            if(error || (data && data.errors)) { 
                // console.log(parameters,signiture);
                console.log('twitter access token err',data,error);//,response);
                // if (cb) cb('error',data);
                res.status( 400 );
                // res.send( '<html>\r\n\r\n<body bgcolor="white">\r\n<center><h1>Account connection failed.</h1></center>\r\n<hr>\r\n</body>\r\n</html>\r\n');
                res.sendFile('failed.html');
            } else { 
                console.log('success! twitter access token',data);
                // socket.emit('twitter token',data);
                data = parseTwitterResponse(data);

                userData.twitterToken = data.oauth_token;
                userData.twitterTokenSecret = data.oauth_token_secret;
                
                res.status( 200 );
                res.sendFile('success.html');

                // TODO: we dont have a user id so how are we going to tell the front end we got their token?
                io.to(userData.id,'twitter token',{}); // tell the front end we got one.
            }
        });
    });

    /********************************************************************************/
    /*********************************** SOCKETIO ***********************************/
    /********************************************************************************/

        // console.log('twitcreds',credentials);
        var twit = new Twitter({
            consumer_key: credentials.twitter.consumer_key,           
            consumer_secret: credentials.twitter.consumer_secret,        
            access_token_key: credentials.twitter.access_token_key,       
            access_token_secret: credentials.twitter.access_token_secret     
        });

        var timelinecache;
        twit.get('statuses/home_timeline',{tweet_mode:'extended'},function(err,result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('timeline result');
            timelinecache = result;
            // if (cb) cb(result);
        });

        var mentionscache;
        twit.get('statuses/mentions_timeline', {}, function(error, tweets, response) {
            // if (cb) cb(result);
            if (error) {
                console.log(error);
                return;
            }
            console.log('mentions result');
            mentionscache = tweets;
        });

        var directmessagescache;
        // direct_messages
        twit.get('direct_messages', {}, function(error, tweets, response) {
            // if (cb) cb(result);
            if (error) {
                console.log(error);
                return;
            }
            console.log('mentions result');
            mentionscache = tweets;
        });

        var profilecache;
         twit.get('users/show', {screen_name: '@hannufluff'},function(error,  response) {
            if (error) {
                console.log(error);
                return;
            }
            console.log('profile result');
            profilecache = response;
            twit.get('statuses/user_timeline', {screen_name: '@hannufluff'}, function(error, tweets) {
                // if (cb) cb(result);
                if (error) {
                    console.log(error);
                    return;
                }
                console.log('home user timeline result');
                profilecache.timeline = tweets;
            });
        });

        var userStream;
        twit.stream('user', {tweet_mode:'extended'}, function(stream) {
            userStream = stream;
        });
        userStream.on('error', function(error) {
            throw error;
        });
        var usersCache;

    var sessions = []; // this is where we're going to keep our session tokens and stuff.
    var usersConnected = 0;
    io.on( 'connection', function( socket ){
        usersConnected++;
        var userData={};

        console.log('a user connected', usersConnected, 'This process is pid', process.pid );


        socket.on('getToken',function(data,cb) {
            if (!cb) return; // ok
            var token = createToken();

            console.log('--------------------------------------------------------');
            // console.log(socket.conn.request.headers);
            console.log( socket.handshake.address );
            console.log(token);
            console.log('--------------------------------------------------------');

            sessions.push({ 
                sessiontoken:token,
                hasTwitter:false,
                ip: socket.handshake.address // nginx isn't giving us x-real-ip..  // socket.conn.request.headers['x-forwarded-for']
            });

            cb({token:token});
        });

        // sessiontoken
        socket.once('checkToken',function(data,cb) {
            if (typeof data == "object" || data=="bad format") {
                if (cb) return cb("bad format");
            }

            // console.log("check sessions",sessions);

            var user = sessions.find(function (obj) { 
                return (obj.ip === socket.handshake.address && obj.sessiontoken === data); 
            });
            
            // console.log('current user',user);

            if (user && user.hasTwitter) {
                userData = user;
                console.log('current user', userData);
                if (cb) return cb("ok");
            } 

            if (cb) return cb("bad format");
        });

        function streamfunction(event) {
            socket.emit('hometweet',event);
            // TODO add an id here so react can use this.
            // event.id 
            timelinecache.unshift(event); // add this to the cache.
            console.log(event && event.text);
            streamfunction = this;
        };
        userStream.on('data', streamfunction);

        socket.on( 'disconnect', function(){
            usersConnected--;
            console.log('user disconnected', usersConnected);
            if(userData.id){
                userData = {}; // clear user data, might not be necessary, closure should take care of it
            }
            // if(streamfunction) {
            //     userStream.removeListener('data',streamfunction);
            // }
            userStream.removeAllListeners('data');
        });

        socket.on('getrequesttoken',function(data,cb){
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            var callback = 'http://138.197.170.47:4000/twitter';
            var nonce = s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
            nonce = new Buffer( nonce ).toString('base64');
            var timestamp = Math.round((new Date()).getTime() / 1000.0);//new Date().getTime();
            var parameters =
                'oauth_callback='+percentEncode(callback)+
                '&oauth_consumer_key='+percentEncode(credentials.twitter.consumer_key)+
                '&oauth_nonce='+percentEncode(nonce)+
                '&oauth_signature_method='+percentEncode('HMAC-SHA1')+
                '&oauth_timestamp='+percentEncode(timestamp)+
                '&oauth_version='+percentEncode('1.0');
            var base = 'POST'+'&'+percentEncode('https://api.twitter.com/oauth/request_token')+'&'+percentEncode(parameters);
            var signingKey = percentEncode(credentials.twitter.consumer_secret)+'&';//+percentEncode('E0h6CsWX0zgiPppitqI7Hk7XluGmjIfgs0zEUjLaQzWGW');
            var signiture = CryptoJS.HmacSHA1(base, signingKey);
            signiture = CryptoJS.enc.Base64.stringify(signiture);

            // console.log('twitter header',base,signingKey,signiture);
            // console.log('twitter signiture',percentEncode(signiture));

            request.post({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'OAuth ' + 'oauth_callback="'+percentEncode(callback)+'", '+
                                                'oauth_consumer_key="'+percentEncode(credentials.twitter.consumer_key)+'", '+
                                                'oauth_nonce="'+percentEncode(nonce)+'", '+
                                                'oauth_signature="'+percentEncode(signiture)+'", '+
                                                'oauth_signature_method="'+percentEncode('HMAC-SHA1')+'", '+
                                                'oauth_timestamp="'+percentEncode(timestamp)+'", '+
                                                'oauth_version="'+percentEncode('1.0')+'"'
                },
                url: 'https://api.twitter.com/oauth/request_token',
                form:  {
                    oauth_callback: callback
                },
                method: 'POST'
            },function(error, response, body){
                // console.log(error,response,body);
                // return;
                var data = body;
                // try {
                //     data = JSON.parse(body)
                // } catch (e) {
                //     // console.log('twitter parse error',e);
                //     // if (cb) cb('error');
                // }
                // console.log(data);
                // var data = JSON.parse(body);
                if(error || (data && data.errors)) { 
                    // console.log(parameters,signiture);
                    console.log('twitter auth/token err',data,error);//,response);
                    if (cb) cb('error');
                    // res.status( 400 );
                } else { 
                    console.log('success! twitter token',data);
                    // socket.emit('twitter token',data);
                    data = parseTwitterResponse(data);
                    userData.twitterToken = data.oauth_token;
                    userData.twitterTokenSecret = data.oauth_token_secret;

                    // delete data.oauth_token_secret;
                    
                    if (cb) cb(userData.twitterToken);
                }
            });
        });

        // ANYTHING BELOW HERE NEEDS AUTH

        socket.on('updatestatus',function(data,cb){
            twit.updateStatus('Test tweet from ntwitter/' + twitter.VERSION,
                function (err, result) {
                    console.log(result);
                    if (cb) cb(result);
                }
            );
        });

        socket.on('gethometimeline',function(data,cb){
            // console.log(timelinecache);
            // if (timelinecache && timelinecache.length) {
                console.log('return cache');
                if (cb) cb(timelinecache);
                // return;
            // }
        });

        socket.on('getmentions', function(data,cb) { // load profile by id
           if (cb) cb(mentionscache);
            // twitter.get('statuses/mentions_timeline',function(error, tweets, response) {
            //     if (error) {
            //         if(cb) cb({error:error});
            //         return;
            //     }
            //     if(cb) cb(error,tweets);
            // });
        });   

        socket.on('getdirectmessages',function(data,cb) {
            if (cb) cb(directmessagescache);
        })

        socket.on('getdetails', function(data,cb) { // loads replies and stuff to a tweet
            if (!data.id) {
                if(cb) cb({error:'error'});
                return;
            }
            twit.get('statuses/show/'+data.id,{},function(error, tweet) {
                if (error) {
                    if(cb) cb({error:error});
                    return;
                }
                if(cb) cb(tweet);
            });
        });

        // socket.on('get my twitter user', function(cb) { // for loading your profile
        // });



        socket.on('gethomeuser', function(data,cb) { // load profile by id
            // if (!data.id) {
            //     if(cb) cb({error:'error'});
            //     return;
            // }
           if(cb) cb(profilecache)
        });

        socket.on('gethomeusertimeline', function(data,cb) { // load profile by id
            // if (!data.id) {
            //     if(cb) cb({error:'error'});
            //     return;
            // }
           if(cb) cb(homeusertimelinecache)
        });


        socket.on('getuser', function(data,cb) { // load profile by screen_name
            console.log('getuser',data);
            if (!data.screen_name) {
                if(cb) cb({error:'error'});
                return;
            }

            let user;
            twit.get('users/show', {screen_name: data.screen_name},function(error,  response) {
                if (error) {
                    if(cb) cb({error:error});
                    return;
                }
                user = response
                twit.get('statuses/user_timeline',{screen_name: data.screen_name,tweet_mode:'extended'},function(error, tweets) {
                    if (error) {
                        if(cb) cb({error:error});
                        return;
                    }
                    user.timeline = tweets;
                    if(cb) cb(user);
                });
            });
        });

        socket.on('searchtwitter', function(data,cb) { // search tweets & users
            if (!data || !data.search) return;
            twit.search(data.search, {}, function(err, result) {
                console.log(result);
                if (cb) cb(result);
            });
        });

        // POST

        socket.on('retweettweet',function(data,cb){
            if (!data || !data.id) {
                if (cb) cb({error:'error'});
                return;
            } 
            twit.post('statuses/retweet/'+data.id,{},function(error, tweets) {
                if (error) {
                    if(cb) cb({error:error});
                    return;
                }
                if(cb) cb('ok');
            });
        });

        socket.on('unretweettweet',function(data,cb){
            if (!data || !data.id) {
                if (cb) cb({error:'error'});
                return;
            } 
            twit.post('statuses/unretweet/'+data.id,{},function(error, tweets) {
                if (error) {
                    if(cb) cb({error:error});
                    return;
                }
                if(cb) cb('ok');
            });
        });

        socket.on('favoritetweet',function(data,cb) {
            if (!data || !data.id) {
                if (cb) cb({error:'error'});
                return;
            } 

            // TODO update the cached tweet to set favorited = true;

            twit.post('favorites/create',{id: data.id},function(error, tweets) {
                if (error) {
                    if(cb) cb({error:error});
                    return;
                }
                if(cb) cb('ok');
            });
        });
        socket.on('unfavoritetweet',function(data,cb) {
            if (!data || !data.id) {
                if (cb) cb({error:'error'});
                return;
            } 
            twit.post('favorites/destroy',{id: data.id},function(error, tweets) {
                if (error) {
                    if(cb) cb({error:error});
                    return;
                }
                if(cb) cb('ok');
            });
        });


    });

    http.listen(port, function(){
        console.log('listening on *:', port);
    });
}
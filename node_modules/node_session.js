 var sessions = [];//Blank object literal

    var start = function(res, req) {
    
    var conn = { res: res, req: req };
    
    var cookies = {};
    
    if(typeof conn.req.headers.cookie !== "undefined") {
        
        conn.req.headers.cookie.split(';').forEach(function( cookie ) {
            var parts = cookie.split('=');
            cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
        });//Grab all cookies, and parse them into properties of the cookies object
    
        
    } else {
        cookies.SESSID = 0;
    }
    
    var SESSID = cookies.SESSID;//Get current SESSID
    
    if(typeof sessions[SESSID] !== "undefined") {
        session = sessions[SESSID];
        
        if(session.expires < Date()) {//If session is expired
            delete sessions[SESSID];
            return newSession(conn.res);
        } else {
            var dt = new Date();
            dt.setMinutes(dt.getMinutes() + 30);
            
            session.expires = dt;//Reset session expiration
            return sessions[SESSID];
        }
    } else {
        return newSession(conn.res);   
    }
};

function newSession(res) {

    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var SESSID = '';
	for (var i = 0; i < 40; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		SESSID += chars.substring(rnum,rnum+1);
	}//Generate a 40 char random string for session id
    
    if(typeof sessions[SESSID] !== "undefined") {
        return newSession(res);//Avoid duplicate sessions
    }
    
    var dt = new Date();
    dt.setMinutes(dt.getMinutes() + 30);
    
    var session = { //Session literal object
                    SESSID: SESSID,
                    expires: dt
                    };
    sessions[SESSID] = session;//Store it for future requests
    
    res.setHeader('Set-Cookie', 'SESSID=' + SESSID);
    
    return session;
           
}

function cleanSessions() {
       for(sess in sessions) {
            if(sess.expires < Date()) {//If expired
                delete sessions[sess.SESSID];
            }
       }
}

/***************
 * Build Exports Object
 * *************/
 
 exports.start = start;
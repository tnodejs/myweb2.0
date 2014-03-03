/**
 *
 * @author danhuang 2013-03-08
 * @class for http get or post
 *
 */
module.exports = {
	curl_get : function(url, get, callback){
		var org_url       = url
		  , org_get       = get
		  , params  = {}
		  , logInfo = {};
		 
		 logInfo['get'] = get;
		 
		 if(get){
		 	if(url.indexOf('?') > -1){
		 		url = url + '&';
		 	} else {
		 		url = url + '?';
		 	}
		 	 url = url + QUERYSTRING.stringify(get);
		 }
		 
		 params['url']  = url;
		 params['json'] = true;
		 params['timeout'] = 300000;

		 logInfo['url'] = url;
		 try{
		 	REQUEST.get(params, function(error, response, result){
			 	if(error){
			 		console.log(url, error);
			 		callback(result, error);
			 	} else {
			 		callback(result);
			 	}
			 });
		 } catch(err){
		 	console.log(url, err);
		 	callback({}, otherParam);
		 }
		 
	},
	
	get : function(url, get, otherParams, callback){
		var org_url       = url
		  , org_get       = get
		  , params  = {}
		  , logInfo = {};
		 
		 logInfo['get'] = get;
		 
		 if(get){
		 	if(url.indexOf('?') > -1){
		 		url = url + '&';
		 	} else {
		 		url = url + '?';
		 	}
		 	url = url + QUERYSTRING.stringify(get);
		 }
		 
		 params['url']  = url;
		 params['json'] = true;
		 params['timeout'] = 300000;
		 logInfo['url'] = url;
		 try{
		 	 REQUEST.get(params, function(error, response, result){
			 	if(error){
			 		console.log(url, error);
			 		callback(result, otherParams, error);
			 	} else {
			 		callback(result, otherParams);
			 	}
			 });
		 }catch(err){
		 	console.log(url, err);
		 	callback({}, otherParam);
		 }
		
	},
	
	curl_post : function(url, post, callback){
		var org_url       = url
		  , org_post       = post
		  , params  = {}
		  , logInfo = {};
		 
		 logInfo['url'] = url;
		 
		 params['url']  = url;
		 params['json'] = true;
		 params['form'] = post;
		 params['timeout'] = 300000;
		 var otherParam = post['other'] ? post['other'] : {};
         params['other'] = otherParam;
		 
		 try{
		 	 REQUEST.post(params, function(error, response, result){
			 	var otherParam = params['other'] ? params['other'] : {};
			 	if(error){
			 		console.log(url, error);
			 		callback(result, otherParam);
			 	} else {
			 		callback(result, otherParam);
			 	}
			 });
		 } catch(err){
		 	console.log(url, err);
		 	callback({}, otherParam);
		 }
		
	}
}
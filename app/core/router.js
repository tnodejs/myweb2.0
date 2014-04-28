/**
 * main system routher path
 * this module deal with system router
 * @author danhuang 2013-03-07
 *
 */
exports.router = function(res, req){
	var logInfo = {};
	/* url decode */
	var pathname = decodeURI(URL.parse(req.url).pathname);
	
	/* init http parameters */
	HTTPPARAM.init(req, res);
	
	/* init session modules */
	global.sessionLib = SESSION.start(res, req);
	
	/* get http request path, use / explode request url to get controller and action */
	var pathArr = pathname.split('/');
	
	/* get the first empty parameter */ 
	pathArr.shift();
	var model = pathArr.shift()
	  , controller = pathArr.shift()
	  , Class = '';
	  
	/* add log message */
	logInfo['time']       = LIBRARY.getDateTime();
	logInfo['ip']         = LIBRARY.getClientIp(req);
	logInfo['pathname']   = pathname;
	logInfo['model']      = model;
	logInfo['controller'] = controller;
	logInfo['url']        = req.url;
	
	/* add debug log */
	console.log(JSON.stringify(logInfo));

	/* if controller or model empty you need return error */
	if(!controller || !model){
		LIBRARY.returnDefault(res);
		return;
	}
	
	/* try require controller class name, if failed then we will response with a static file request */
	try {
		Class = require(CON + model);
	}
	catch (err) {
		STATICMODULE.getStaticFile(pathname, res, req, BASE_DIR);
		return;
	}
	
	/* check class exist */
	if(Class){
		var object = new Class(res, req);
		try{
			object[controller].call();
		} catch(err){
			console.log(err);
			LIBRARY.returnDefault(res);
		}
	} else {
		LIBRARY.returnDefault(res);
	}
}








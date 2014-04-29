/**
 *
 * controller base action
 * --------------------------------------------------------
 * class name is ACTION, which is auto load in load_config
 * this is controller base action, it includes based controller method
 * if you want to add new public controller method you can define here
 * --------------------------------------------------------
 * @author by danhuang
 * @time 2014-02-24
 */
<<<<<<< HEAD
/* this for jade cache */
var cache = {};

module.exports = function(){
	var res, req;

	/**
	 * @desc init res and req
	 *
	 */
	this.init = function(_res, _req){
		res = _res;
		req = _req;
	}
=======
 
module.exports = function(){
	
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b
	/**
	 * @desc render a jade modules
	 * @params jade string, jade name
	 * @params param json
	 * @return response to server client
	 */
	this.render = function(jade, param){
<<<<<<< HEAD
		render(jade, param);
=======
		this._res.render(VIEW + jade, param);
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b
	}
	
	/**
	 * @desc exit json string response to server client
	 * @params res  json
	 * @params code string
	 * @params retcode string 
	 * @params json retInfo
	 * @return response to server client
	 */
<<<<<<< HEAD
	this.exitJson = function(code, retcode, retInfo){
=======
	this.exitJson = function(res, code, retcode, retInfo){
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b
		var retJson        = {};
		retJson['ret']     = parseInt(code);
		retJson['retcode'] = parseInt(retcode);
		retJson['data']    = retInfo;
		retJsonString = JSON.stringify(retJson);
	    res.writeHead(200, { 'Content-Type': 'text/plain' });
	    res.end(retJsonString);
	}
	
	/**
	 * @desc read a html data and response to client
	 * @params html string
	 * @return response to server client, if not exist exit 500
	 */
	this.renderHtml = function(html){
		try{
			var string = FS.readFileSync(VIEW + html, 'utf8');
			res.writeHead(404, { 'Content-Type': 'text/html' });
			res.end(string);
		} catch(e){
			console.log(e);
			string = '';
			res.writeHead(500, { 'Content-Type': 'text/html' });
			res.end(string);
		}
	}
<<<<<<< HEAD
	
	/**
	 *
	 * @desc get http request get params
	 * @params key string
	 * @params xssFilter boolean
	 * @return json object
	 */
	this.get = function(){
		var key = arguments[0];
		var xssFilter = arguments[1] ? arguments[0] : true;
		HTTP_PARAM.GET(key);
	}
	
	/**
	 *
	 * @desc get http request get params
	 * @params key string
	 * @params xssFilter boolean
	 * @return json object
	 */
	this.post = function(){
		var key = arguments[0];
		var xssFilter = arguments[1] ? arguments[0] : true;
	}
	
	/**
	 *
	 * @desc get http request get params
	 * @params key string
	 * @params xssFilter boolean
	 * @return json object
	 */
	this.getPost = function(){
		var key = arguments[0];
		var xssFilter = arguments[1] ? arguments[0] : true;
	}

	/**
	 * add render function
	 *
	 * 
	 */
	function render(){
		var _self        = this;
		var template     = arguments[0];
		var options      = arguments[1];
		var filePath     = VIEW + template;

		FS.stat(filePath, function(err, fileInfo){ // get file data
			if(err){
				console.log('can not read file ' + filePath);
			}

			var lastModified = new Date(fileInfo.mtime).getTime();
			var paramStr     = options ? UTIL.getStringMd5(JSON.stringify(options)) : 'default';
			var tmpFileName  = template + "_" + lastModified + '_' + paramStr + '.html';

			tmpFileName = tmpFileName.replace('.', '_');
			/* get cache file */
			if(cache[tmpFileName]){ // deal with cache
				var pageHtml = cache[tmpFileName];
				FS.readFile(pageHtml, 'utf8', function(err, data){
					if(err){
						console.log('get cache file error ' + pageHtml);
					}
					res.writeHead(200, { 'Content-Type': 'text/html' });
					res.end(data);   
				});
				return;
			} 

			/* no cache get file data and set cache */
			var tmpFilePath = CACHE + tmpFileName;
			FS.readFile(filePath, 'utf8', function(err, data){
				var fn = JADE.compile(data, { filename: filePath, pretty: true });
				var page = fn(options);
				FS.writeFile(tmpFilePath, page, 'utf8', function(err){
					if(err){
						console.log('set cache error, can not write file ' + tmpFilePath);
					} else {
						cache[tmpFileName] = tmpFilePath;
					}
				});
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(page);   
			});
		});
		
	}
=======
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b
}

/* end of file action.js */
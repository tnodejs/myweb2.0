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
 
module.exports = function(){
	
	/**
	 * @desc render a jade modules
	 * @params jade string, jade name
	 * @params param json
	 * @return response to server client
	 */
	this.render = function(jade, param){
		this._res.render(VIEW + jade, param);
	}
	
	/**
	 * @desc exit json string response to server client
	 * @params res  json
	 * @params code string
	 * @params retcode string 
	 * @params json retInfo
	 * @return response to server client
	 */
	this.exitJson = function(res, code, retcode, retInfo){
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
}

/* end of file action.js */
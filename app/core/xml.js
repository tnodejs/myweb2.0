/**
 * xml to json
 * @author danhuang 2013-03-08
 */
 var xml2js  = require('xml2js');
 var parseString = xml2js.parseString;
 
exports.getXmlData = function(xmlUrl, callback){
 	var logInfo = {}, retInfo = {};
		
	// 添加日志记录
	logInfo['xml_url'] = xmlUrl;
		
	// 远程获取xml文件信息，并写入本地xml文件
	CURL.curl_get(xmlUrl, null, function(xmlInfo, error){
		if(error){ //判断是否成功读取文件信息，失败记录错误日志
			logInfo['error'] = error;
			retInfo['data'] = {};
			retInfo['code'] = RET_NUM.XML_URL_NOT_EXIST;
			callback(retInfo);
			return;
		}
		parseString(xmlInfo, function (err, result) {
	    	if(err){
	    		logInfo['err']  = err;
	    		retInfo['code'] = RET_NUM.XML_PARSE_ERR;
	    		retInfo['data'] = {};
	    		log.error(RET_NUM.XML_PARSE_ERR, LOG_CONTR.CONFIG, logInfo);
	    	} else {
	    		retInfo['code'] = RET_NUM.RET_SUCC;
	    		retInfo['data'] = result;
	    	}
	    	callback(retInfo);
		});
	})
 }

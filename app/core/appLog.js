/**
 *
 * applog store error number and error message
 * --------------------------------------------------------
 * ERR_NUM store the error number
 * ERR_MSG store the error message
 * --------------------------------------------------------
 * @author by danhuang
 * @time 2014-02-24
 */


/* error num */
var ERR_NUM = {
	'RET_SUCC'       : '0'
  , 'RET_ERR'        : '-1'
  , 'RET_PARS_ERR'   : '-2'
  , 'CONFIG_ERR'     : '-3'
  , 'FILE_NOT_EXIST' : '-4'
  , 'XML_PARSE_ERR'  : '-5'
  , 'CURL_GET_ERR'   : '-6'
  , 'CURL_POST_ERR'  : '-7'
  , 'STRING_NOT_RT'  : '-8'
  , 'NOT_IN_ARR'     : '-9'
  , 'TIME_ERROR'     : '-10'
  , 'XML_TYPE_ERR'   : '-11'
  
  , 'XML_URL_NOT_EXIST'   : '-12'
  , 'WRITE_LOCAL_XML_ERR' : '-13'
  
  , 'EXIST_SOD_DATA' : '-14'
  
  , 'ADD_TWEET_ERR'  : '-15'
  , 'EXIST_AOD_DATA' : '-16'
  , 'ADD_IN_DB_ERR'  : '-17'
  , 'MODIFY_DATA_ERR' : '-18'
  , 'DELETE_DB_ERR'   : '-19'
  , 'CONTENT_IS_NULL'   : '-20'
}

/* error message */
var ERR_MSG = {
	'0'     : 'success'
  , '-1'    : 'error'
  , '-2'    : 'api parameters error'
  , '-3'    : 'parse configure file error'
  , '-4'    : 'file is not exist'
  , '-5'    : 'parse xml come a error'
  , '-6'    : 'when use curl get come out a error'
  , '-7'    : 'when use curl post    come out a error'
  , '-8'    : 'xml format error, check string not right'
  , '-9'    : 'xml format error, check type in array error'
  , '-10'   : 'xml format error, check time error'
  , '-11'   : 'xml format error, xml type error'
  , '-12'   : 'xml url is not exist'
  , '-13'   : 'can not write xml at local path'
  , '-14'   : 'sod is exist, can not add in db'
  , '-15'   : 'use admin api add weibo come out error'
  , '-16'   : 'aod is exist, can not add in db'
  , '-17'   : 'add data into db, come out a error'
  , '-18'   : 'modify db data come out a error'
  , '-19'   : 'delete data in db come out error'
  , '-20'   : 'content is not right'
}


/* controller */
var LOG_CONTR = { 
	SERVER : 'server'
  , API    : 'api'
  , CONTR  : 'controller'
  , DB     : 'database'
  , CONFIG : 'read_config'
  , CURL   : 'curl'
  , MODEL  : 'model'
  , CHECK_XML : 'check_xml'
  , CRONTAB : 'crontab'
  , TWEET  : 'tweet'
}

function getMsg(errorCode){
	return ERR_MSG[errorCode];
}

/* exports */
exports.ERR_NUM = ERR_NUM;
exports.ERR_MSG = ERR_MSG;
exports.LOG_CONTR = LOG_CONTR;
exports.getMsg  = getMsg;

/* end of file appLog.js */

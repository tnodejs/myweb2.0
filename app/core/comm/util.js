/**
 *
 * system util modules
 * --------------------------------------------------------
 * this util include some function that you need to use
 * getDateTime: give a timestamp to get a string time like 20140224
 * escapeHtml: be to safe, you should escape html
 * getStringMd5: if you want to md5, this will be a great method
 * isEmpty: check object is empty
 * --------------------------------------------------------
 * @author by danhuang
 * @time 2014-02-24
 */


/**
 *
 * @desc give a timestamp to get a string time like 20140224
 * @params int or string timestamp
 * @params string format
 * @return string like 20140224
 *
 */
function getDateTime(timestamp, format) {
	var timeTemp = timestamp ? new Date(timestamp) : new Date(),
		currentTime;
	var yy = timeTemp.getFullYear();
	var MM = timeTemp.getMonth();
	var dd = timeTemp.getDate();
	var hh = timeTemp.getHours();
	var mm = timeTemp.getMinutes();
	var ss = timeTemp.getSeconds();

	// fixed MM, value of MM from 0 to 11
	MM === 0 ? MM = 12 : MM++;

	// fixed time format
	MM < 10 ? MM = '0'.concat(MM) : null;
	dd < 10 ? dd = '0'.concat(dd) : null;
	hh < 10 ? hh = '0'.concat(hh) : null;
	mm < 10 ? mm = '0'.concat(mm) : null;
	ss < 10 ? ss = '0'.concat(ss) : null;
	if(format){
		return yy + '-' + MM + '-' + dd;
	}
	currentTime = yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
	return currentTime;
}

/**
 * @desc escape html string, include & < > " '
 * @params string string
 * @return string
 *
 */
function escapeHtml(string) {
	var entityMap = {
	    "&": "&amp;",
	    "<": "&lt;",
	    ">": "&gt;",
	    '"': '&quot;',
	    "'": '&apos;'
	};
    return String(string).replace(/[&<>"']/g, function (s) {
      return entityMap[s];
    });
}

/**
 *
 * @desc md5
 * @params string string
 * @return string
 */
function getStringMd5(string){
	var crypto = require('crypto');
	var hash = crypto.createHash("md5");
	hash.update(new Buffer(string, "binary"));
	var encode = hash.digest('hex');
	return encode;
}

/**
 *
 * @desc check object wether is empty or not
 * @params object obj
 * @return boolean
 */
function isEmpty(obj)
{
    for (var name in obj) 
    {
        return false;
    }
    return true;
}


/* exports function */
exports.getDateTime = getDateTime;
exports.escapeHtml = escapeHtml;
exports.getStringMd5 = getStringMd5;
exports.isEmpty = isEmpty;



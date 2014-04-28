/**
 *
 * @type class
 * @author danhuang
 * @time 2013-10-12
 * @desc 主要是应用于数据导入
 */
var preTimestamp = '';
var excludeArr = [];
function TpContent(){
	var _self = this;
	
	var _tableName = 't_tp_content';
	Model.call(_self);
	
	SYS.inherits(_self, Model);
	
	this.addDataInDb = function(rowInfo, callback){
			_self.insert(_tableName, rowInfo, function(ret){
				if(ret){
					callback(true);
				} else {
					callback(false);
				}
			});
		}
		
	};
	 
	 /**
	  *
	  * @desc 根据条件拉取内容
	  * @params whereJson array
	  * @params orderJson array
	  * @params limitJson array
	  */
	 this.getList = function(whereJson, orderByJson, limitJson, callback){
	 	var retJson = [];
	 	_self.find(_tableName, whereJson, orderByJson, limitJson, {}, function(ret){
	 		if(!ret || typeof ret != 'object'){
				callback([]);
				return;
			};
			callback(ret);
	 	});
	 }
	 
	 /**
	  *
	  * 获取返回条数
	  */
	 this.getListNum = function(whereJson, orderByJson, limitJson, callback){
	 	var retJson = [];
	 	if(UTIL.isEmpty(whereJson)){
	 		callback(0);
	 		return;
	 	}
	 	_self.find(_tableName, whereJson, orderByJson, limitJson, {}, function(ret){
	 		if(!ret || typeof ret != 'object'){
				callback(0);
				return;
			};
			callback(retJson.length);
	 	});
	 }
}

var tpContent = new TpContent;
exports.addDataInDb = tpContent.addDataInDb;
exports.getList = tpContent.getList;
exports.getListNum = tpContent.getListNum;


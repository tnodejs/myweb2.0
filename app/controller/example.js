module.exports = function(){
	var _self = this;
	
	this._res  = arguments[0];
	this._req  = arguments[1];
	
	// inherits
	ACTION.call(_self);
	
	SYS.inherits(this, ACTION);
	
	_self.init(this._res, this._req);

	this.test = function(){
		_self.render('example.jade');
	}
}
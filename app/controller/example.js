module.exports = function(){
	var _self = this;
	
	this._res  = arguments[0];
	this._req  = arguments[1];
	
	// ∏∏¿‡ºÃ≥– µœ÷
	ACTION.call(_self);
	
	SYS.inherits(this, ACTION);
	
	this.test = function(){
		_self.render('example.jade');
	}
}
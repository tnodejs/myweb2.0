/**
 *
 * main system init
 * --------------------------------------------------------
 * here will do below tings
 * 1. init system path, use global
 * 2. setting environment(dev, test, product)
 * 3. load modules, include default modules and other modules
 * 4. init log 
 * 5. start sever
 * --------------------------------------------------------
 * @author by danhuang
 * @time 2014-02-24
 */

/**
 *
 * set global path
 */
<<<<<<< HEAD
global.BASE_DIR  = __dirname;
=======
global.BASE_DIR = __dirname;
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b
global.APP       = BASE_DIR + "/app/";
global.CON       = APP      + "controller/";
global.CORE      = APP      + "core/";
global.COMM      = CORE     + "comm/";
<<<<<<< HEAD
global.PMODEL    = APP      + "model/";
=======
global.PMODEL     = APP      + "model/";
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b
global.LIB       = BASE_DIR + "/node_modules/";
global.CONF      = BASE_DIR + "/conf/";
global.STATIC    = BASE_DIR + "/static/";
global.VIEW      = BASE_DIR + "/view/";
<<<<<<< HEAD
global.CACHE     = BASE_DIR + "/cache/";
=======
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b

// dev, test or product
global.ENVIRONMENT = 'dev';

global.LIBRARY   = require(LIB + 'library');
global.CONFIG    = require(LIB + 'config');

/* get system configure */
var systemConfig  = LIBRARY.getConfig('system', 'ip_port');
var autoLoadModel = LIBRARY.getConfig('system', 'load_model');

/* default 404 page */
global._PAGE_404  = LIBRARY.getConfig('system', 'page_404');

/* auto load modules */
LIBRARY.loadModules();

/**
 * modules入口
 */
/* if you do not like auto load in load_config.json, you can also load modules here */
//global.HTTPPARAM    = require(LIB  + 'http_param');
global.PARSECOOKIE  = CONNECT.utils.parseCookie;

/**
 *
 * add log default configure
 */
global.log = new LOG('crontab', BASE_DIR + '/logs');
global.RET_NUM = APPLOG.ERR_NUM;
global.LOG_CONTR = APPLOG.LOG_CONTR;


<<<<<<< HEAD
/* you can init mongodb */
=======
// you can init mongodb
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b
if(autoLoadModel == 1){
	var model = new MODEL();
	model.initConnection();
}

/* server start */
global.app = HTTP.createServer(function(req, res) {
<<<<<<< HEAD
=======
	/* add render function */
	res.render = function(){
		var template = arguments[0];
		var options = arguments[1];
		var str = FS.readFileSync(template, 'utf8');
		var fn = JADE.compile(str, { filename: template, pretty: true });
		var page = fn(options);
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(page);   
	}
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b
	ROUTER.router(res, req);
}).listen(systemConfig['port'], systemConfig['ip']);

/* server start log */
console.log('server start ' + systemConfig['ip'] + ':' + systemConfig['port']);
console.log('-----------------------------');

/* end of file app.js */

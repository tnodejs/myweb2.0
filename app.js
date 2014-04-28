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
global.BASE_DIR  = __dirname;
global.APP       = BASE_DIR + "/app/";
global.CON       = APP      + "controller/";
global.CORE      = APP      + "core/";
global.COMM      = CORE     + "comm/";
global.PMODEL    = APP      + "model/";
global.LIB       = BASE_DIR + "/node_modules/";
global.CONF      = BASE_DIR + "/conf/";
global.STATIC    = BASE_DIR + "/static/";
global.VIEW      = BASE_DIR + "/view/";
global.CACHE     = BASE_DIR + "/cache/";

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


/* you can init mongodb */
if(autoLoadModel == 1){
	var model = new MODEL();
	model.initConnection();
}

/* server start */
global.app = HTTP.createServer(function(req, res) {
	ROUTER.router(res, req);
}).listen(systemConfig['port'], systemConfig['ip']);

/* server start log */
console.log('server start ' + systemConfig['ip'] + ':' + systemConfig['port']);
console.log('-----------------------------');

/* end of file app.js */

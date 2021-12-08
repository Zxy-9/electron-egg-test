'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // home
  router.get('/', controller.v1.home.index);

  // html
  router.get('/home', controller.v1.home.index);
  
  router.get('/hello', controller.v1.home.hello);

  // 引入其他路由
  require('./example')(app);
};



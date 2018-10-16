import Router from './router';
import home_controller from './controllers/home_controller';
home_controller.render();

 const router=new Router({initial:'#/home'});
 window.router=router;
 router.init();

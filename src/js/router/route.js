import  home_body_constroller  from '../controllers/home_body_controller';
import  find_constroller from '../controllers/find_controller';
import  my_constroller from '../controllers/my_controller';
import  order_constroller from '../controllers/order_controller';

const routes = {
    '#/home': home_body_constroller,
    '#/find': find_constroller,
    '#/my': my_constroller,
    '#/order': order_constroller
}

export  { routes };
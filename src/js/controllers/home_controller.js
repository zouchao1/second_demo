import home_template from '../views/home.html';
import serch_controll from './serch';
const render=()=>{

    document.querySelector("#root").innerHTML=home_template;
   $(".text").live("focus",function(){
    serch_controll.render();
   })

}

export default { render }
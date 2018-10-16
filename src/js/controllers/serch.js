import serch_template from '../views/serch.html';
import home_template from '../views/home.html';
import home_body_controll from './home_body_controller'

const render = () => {
    document.querySelector("#root").innerHTML=serch_template;

    $(".back").on("tap",function(){
        document.querySelector("#root").innerHTML=home_template;
        home_body_controll.render();
    })
}

export default { render }
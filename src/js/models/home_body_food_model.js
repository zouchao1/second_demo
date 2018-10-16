const home_body_food_list=()=>{


    return $.ajax({
        url: './static/mock/list_food.json',
        success: (res) => { 
           return res;
        }
    })
    }
    
    export default {  home_body_food_list }
  
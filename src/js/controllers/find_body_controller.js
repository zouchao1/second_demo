import find_template from '../views/find.html';
import find_person_template from '../views/find_person.html';
import find_person_model from'../models/find_person_model';
const render=()=>{

    document.querySelector("#root").innerHTML=find_template;
    getMenuList()
}

const getMenuList=async ()=>{
    let _find_data=await find_person_model.find_person_list();
    let _find_list=_find_data.data;
    let _template=Handlebars.compile(find_person_template);
    let _html=_template({_find_list});
    $(".list").html(_html);
    
}

export default {
    render
}
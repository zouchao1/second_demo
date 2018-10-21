const find_template=require('../views/find.html');
const find_person_template=require('../views/find_person.html');
const find_person_model=require('../models/find_person_model');
const render=()=>{

    document.querySelector("#root").innerHTML=find_template;
    getMenuList()
}

const getMenuList=async ()=>{
    let _find_data=JSON.parse(await find_person_model.find_person_list());
    let _find_list=_find_data.data;
    console.log(_find_list);
    let _template=Handlebars.compile(find_person_template);
    let _html=_template({_find_list});
    $(".list").html(_html);
    
}

module.exports={
    render
}
const home_body_menu_list=()=>{


return $.ajax({
    url: '/eme/restapi/shopping/openapi/entries?latitude=40.042475&longitude=116.305969&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5',
    success: (res) => {
       return res;
    }
})
}


export default {   home_body_menu_list }
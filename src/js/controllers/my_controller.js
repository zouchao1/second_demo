import my_template from'../views/my.html';

const render = () => {
    $(".nav-link:not(:first-child)").on('tap',function(){
        $(".header").css("display",'none')
    })
    $(' main').html(my_template);
}

export default { render }
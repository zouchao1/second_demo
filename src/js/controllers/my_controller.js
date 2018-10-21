import my_template from'../views/my.html';

const render = () => {
    $(".nav-link:not(:first-child)").on('tap',function(){
        $(".header").css("display",'none')
    })
    $(".s-con>.up-in>a").on('tap',()=>{
       // console.log("aaaa");
        //window.location.href='https://h5.ele.me/login/#redirect=https%3A%2F%2Fh5.ele.me%2Fprofile%2F';
    })
    $(' main').html(my_template);
}

export default { render }
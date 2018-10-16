import my_template from'../views/my.html';

const render = () => {
    $(' main').html(my_template);
}

export default { render }
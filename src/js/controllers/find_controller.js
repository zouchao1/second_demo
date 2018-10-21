import find_template from '../views/find.html';

const render = () => {
    //$(' main').html(find_template);
    document.querySelector("#root").innerHTML=find_template;
}

export default { render }
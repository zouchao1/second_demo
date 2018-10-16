import order_template from '../views/order.html';

const render = () => {
    $(' main').html(order_template);
}

export default { render }
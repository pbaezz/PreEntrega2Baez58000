import cart from "./assets/shopping-cart-dollar.svg";
import './CartWidget.css'
const CartWidget = () =>{
    return (
        <div className="cart">
            <img src={cart} alt="cart.svg"/>0
        </div>
    );
}

export default CartWidget;
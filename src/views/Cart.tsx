import CartItem from "../components/CartItem"
import CheckoutButton from "../components/CheckoutButton"

const Cart = () => {
  return (
    <div className="cart-wrapper">
      <h1 className="cart-wrapper__heading">
        Cart
      </h1>
      <CartItem />
      <h3 className="cart-wrapper__sum-heading">
        Total Price:
      </h3>
      <p className="cart-wrapper__sum">
        suma €
      </p>
      <CheckoutButton />
    </div>
  )
}

export default Cart
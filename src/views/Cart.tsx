import CartItem from "../components/CartItem"
import CheckoutButton from "../components/CheckoutButton"
import CheckoutMessage from "../components/CheckoutMessage"
import ScrollToTopButton from "../components/ScrollToTopButton"
import { useAppSelector } from '../hooks/hooks'

const Cart = () => {
  const items = useAppSelector(state => state.addToCart);
  
  return (
    <div className="cart-wrapper">
      <h1 className="cart-wrapper__heading">
        Cart
      </h1>
      {items.items.length == 0 &&
      <>
        <p className="cart-wrapper__message">
          Cart is empty
        </p>
      </>
      }

      {items.checkoutMessage == true &&
        <CheckoutMessage />
      }
      
      {items.items.length > 0 &&
        <>
          <CartItem />
          <h3 className="cart-wrapper__sum-heading">
            Total Price:
          </h3>
          <p className="cart-wrapper__sum">
             {items.totalSum.toFixed(2)} €
          </p>
          <CheckoutButton />
          <ScrollToTopButton />
        </>
      }
    </div>
  )
}

export default Cart
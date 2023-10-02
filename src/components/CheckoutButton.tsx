import { useAppDispatch } from "../hooks/hooks"
import { clearCart } from "../store/features/cartLogic/cartSlice"

const CheckoutButton = () => {
  const dispatch = useAppDispatch();
  
  return (
    <button className="checkout-btn" onClick={() => {
      dispatch(clearCart())
    }}>
        Checkout
    </button>
  )
}

export default CheckoutButton
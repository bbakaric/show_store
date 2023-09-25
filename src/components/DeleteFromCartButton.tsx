import { useAppDispatch } from '../hooks/hooks'
import { removeItem, quantityIndicatorDecrease } from "../store/features/cartLogic/cartSlice"

export interface ItemIDProp {
  itemId: number
}

const DeleteFromCart = ({itemId}: ItemIDProp) => {
  const dispatch = useAppDispatch();
  return (
    <button className="delete-from-cart-btn" onClick={() => {
      dispatch(removeItem(itemId))
      dispatch(quantityIndicatorDecrease())
    }}>
        Remove
    </button>
  )
}

export default DeleteFromCart
import { useState } from "react"
import { useAppDispatch } from '../hooks/hooks'
import { quantityIndicatorDecrease, quantityIndicatorIncrease } from "../store/features/cartLogic/cartSlice"

export interface ItemIDProp {
  itemId: number
}

const QuantityInput = () => {
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch();


  return (
    <div className="quantity-input">
      {count > 1 &&
        <button className="quantity-input-btn quantity-decrease" onClick={() => {
          dispatch(quantityIndicatorDecrease())
          setCount(count - 1)
        }}>
            -
        </button>
      }
        <input type="text" className="quantity-input__input" value={count} onChange={() => {
          setCount(count + 1);
        }}/>
        <button className="quantity-input-btn quantity-increase" onClick={() => {
          dispatch(quantityIndicatorIncrease())
          setCount(count + 1)
    }}>
        +
    </button>
    </div>
  )
}

export default QuantityInput
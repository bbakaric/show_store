import { useEffect, useState } from "react"
import { useAppDispatch } from '../hooks/hooks'
import { quantitySum, totalSumAdd, totalSumSubtract } from "../store/features/cartLogic/cartSlice"

export interface ItemIDProp {
  itemId: number
}

export interface DataProp {
  data: {
    id:number,
    title: string,
    price: number,
    image: string,
    description: string,
    category: string,
    cartQuantity: number,
  }
}

const QuantityInput = ({data}: DataProp) => {
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch();
  const id = data.id

  useEffect(() => {
    dispatch(quantitySum({id, count}))
  }, [count, dispatch, id])

  return (
    <div className="quantity-input">
      {count > 1 &&
        <button className="quantity-input-btn quantity-decrease" onClick={() => {
          setCount(count - 1)
          dispatch(totalSumSubtract(data.price))
        }}>
            -
        </button>
      }
      <p id={data.id.toString()} className="quantity-input__input">
        {count}
      </p>
      <button className="quantity-input-btn quantity-increase" onClick={() => {
        setCount(count + 1)
        dispatch(totalSumAdd(data.price))
      }}>
        +
      </button>
    </div>
  )
}

export default QuantityInput
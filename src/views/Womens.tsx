import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchWomenClothing } from '../store/features/womenProducts/womenProductsSlice'

const Womens = () => {
  const womenClothing = useAppSelector(state => state.womensClothes )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchWomenClothing())
  }, [dispatch])
  
  return (
    <div>
      <h2>List of Women's Clothes</h2>
      
        <ul>
          {womenClothing.womenClothes.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
    </div>
  )
}


export default Womens
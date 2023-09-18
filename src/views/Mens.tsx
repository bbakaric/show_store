import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchMensClothes } from '../store/features/menProducts/menProductsSlice'

const Mens = () => {
  const mensClothes = useAppSelector(state => state.mensClothes )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchMensClothes())
  }, [dispatch])

  return (
    <div>
      <h2>List of Mens Clothes</h2>
      
        <ul>
          {mensClothes.mensClothes.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
    </div>
  )
}

export default Mens
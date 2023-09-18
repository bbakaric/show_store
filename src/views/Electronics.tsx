import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchElectronics } from '../store/features/electronics/electronicsSlice'

export const Electronics = () => {
  const electronic = useAppSelector(state => state.electronics )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchElectronics())
  }, [dispatch])
  
  return (
    <div>
      <h2>List of Electronics</h2>
      
        <ul>
          {electronic.electronics.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
    </div>
  )
}

export default Electronics

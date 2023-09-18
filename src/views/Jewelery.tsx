import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchJewelery } from '../store/features/jewelery/jewelerySlice'


const Jewelery = () => {
  const jewel = useAppSelector(state => state.jewelery )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchJewelery())
  }, [dispatch])

  return (
    <div>
      <h2>List of Jewelery</h2>
      
        <ul>
          {jewel.jewelery.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
    </div>
  )
}

export default Jewelery
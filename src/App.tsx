
import type { RootState } from '././app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './app/features/counter/counterSlice'
import { Button } from './components/ui/button'

 export function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>

      
    </div>
  )
}

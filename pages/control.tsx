import { useAtom } from 'jotai'
import { countAtom } from '../state'


export default () => {
  let [count, setCount] = useAtom(countAtom)

  return <button onClick={e => {
    count++;
    setCount(count)
  }}> add </button>
}
import {atom,useAtom} from 'jotai'
import { countAtom } from '../state'

export default () => {
  const  [count] = useAtom(countAtom)
  return <div>
  { count }
  </div>
}
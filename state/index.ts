import { atom } from 'jotai'

const countAtom = atom(0)
const formatCount = atom(get => `${get(countAtom)}元`)

export {
  countAtom,
  formatCount
}

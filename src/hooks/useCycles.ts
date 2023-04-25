import { useContext } from 'react'
import { CyclesContext } from '../context/CyclesContext'

export function useCycles() {
  const context = useContext(CyclesContext)

  return context
}

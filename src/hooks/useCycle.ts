import { useContext } from 'react'
import { CycleContext } from '../context/CycleContext'

export function useCycle() {
  const context = useContext(CycleContext)

  return context
}

import { ReactNode } from 'react'

export interface Props {
  children: ReactNode
}

export interface NewCycleFormData {
  task: string
  minutesAmount: number
}

export interface Cycle {
  id: string
  task: string
  startDate: Date
  minutesAmount: number
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CycleContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  totalSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: NewCycleFormData) => void
  interruptCurrentCycle: () => void
}

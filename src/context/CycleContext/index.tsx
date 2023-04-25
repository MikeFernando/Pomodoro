import { createContext, useState } from 'react'

import { Cycle, CycleContextData, NewCycleFormData, Props } from './types'

export const CycleContext = createContext({} as CycleContextData)

export function CycleContextProvider({ children }: Props) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [totalSecondsPassed, setTotalSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId)

  function createNewCycle({ task, minutesAmount }: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setTotalSecondsPassed(0)

    // reset()
  }

  function interruptCurrentCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function setSecondsPassed(seconds: number) {
    setTotalSecondsPassed(seconds)
  }

  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        createNewCycle,
        interruptCurrentCycle,
        markCurrentCycleAsFinished,
        totalSecondsPassed,
        setSecondsPassed,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}

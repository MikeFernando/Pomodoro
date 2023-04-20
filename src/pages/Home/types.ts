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
}

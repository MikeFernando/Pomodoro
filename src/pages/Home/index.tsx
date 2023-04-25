import { HandPalm, Play } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCycles } from '../../hooks/useCycles'

import { validationSchemaNewCycle } from './validation'
import { NewCycleFormData } from './types'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import * as S from './styles'

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } = useCycles()

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(validationSchemaNewCycle),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { watch, handleSubmit, reset } = newCycleForm

  const task = watch('task')
  const isSubmitingDisabled = task === ''

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <S.StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton disabled={isSubmitingDisabled} type="submit">
            <Play size={24} />
            Começar
          </S.StartCountdownButton>
        )}
      </form>
    </S.HomeContainer>
  )
}

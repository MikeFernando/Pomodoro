import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Play } from 'phosphor-react'

import { schemaNewCycle } from './validation'

import * as S from './styles'
import * as T from './types'

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<T.NewCycleFormData>({
    resolver: zodResolver(schemaNewCycle),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: T.NewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitingDisabled = task === ''

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            type="text"
            list="task-sugestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-sugestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesAmountInput
            id="minutesAmount"
            placeholder="00"
            type="number"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <S.CountdownButton disabled={isSubmitingDisabled} type="submit">
          <Play size={24} />
          Começar
        </S.CountdownButton>
      </form>
    </S.HomeContainer>
  )
}

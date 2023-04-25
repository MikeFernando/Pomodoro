import * as zod from 'zod'

export const validationSchemaNewCycle = zod.object({
  task: zod.string().min(1, 'Informe uma tarefa!'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ter no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ter no máximo 60 minutos.'),
})

import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Estudar React Native</td>
              <td>20 minutes</td>
              <td>Há cerda de 2 meses</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar ReactJS</td>
              <td>60 minutes</td>
              <td>Há cerda de 1h meses</td>
              <td>
                <Status statusColor="yellow">em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar NodeJS</td>
              <td>40 minutes</td>
              <td>Há cerda de 3h meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.5rem;
  }
`
const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  color: ${(props) => props.theme.white};
  border: 0;
  padding: 1rem 0;
  border-radius: 8px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartCountdownButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
export const StopCountdownButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['red-500']};

  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`

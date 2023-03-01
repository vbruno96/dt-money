import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  input {
    flex: 1;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    border: none;
    border-radius: 6px;
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: transparent;
    color: ${(props) => props.theme['green-300']};
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;
    padding: 1rem;
    font-weight: 700;
    transition: all 0.4s;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;

      svg {
        animation: rotate infinite 1.4s linear;
      }
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme['green-500']};
    }
  }
`

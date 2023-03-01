import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  color: ${(props) => props.theme['gray-500']};
  border: 0;
  line-height: 0;
  cursor: pointer;
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 32rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 6px;
  padding: 2.5rem 3rem;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      border: none;
      border-radius: 6px;
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 3.625rem;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      margin-top: 1.5rem;
      border: none;
      border-radius: 6px;
      padding: 0 1.25rem;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.4s;

      &:disabled {
        opacity: 0.6;

        svg {
          animation: rotate infinite 1.4s linear;
        }
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
      }
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

// eslint-disable-next-line prettier/prettier
export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.4s;

  svg {
    color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    background: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-500']
      : props.theme['red-500']};
    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

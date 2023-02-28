import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  padding: 0 1.25rem;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`

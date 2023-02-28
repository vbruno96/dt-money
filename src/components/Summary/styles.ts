import styled from 'styled-components'

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1120px;
  margin: -5rem auto 0;
  padding: 0 1.5rem;
`

interface SummaryCardContainerProps {
  variant?: 'green'
}

export const SummaryCardContainer = styled.div<SummaryCardContainerProps>`
  background: ${(props) =>
    props.variant === 'green'
      ? props.theme['green-700']
      : props.theme['gray-600']};
  padding: 1.5rem 1.5rem 2rem;
  border-radius: 6px;

  header {
    display: flex;
    aling-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`

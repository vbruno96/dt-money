import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCardContainer, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCardContainer>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCardContainer>
      <SummaryCardContainer>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCardContainer>
      <SummaryCardContainer variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCardContainer>
    </SummaryContainer>
  )
}

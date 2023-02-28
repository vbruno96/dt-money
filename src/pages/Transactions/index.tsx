import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionTable,
  TransactionsContainer,
} from './styles'

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.800,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>27/02/2023</td>
            </tr>
            <tr>
              <td>Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">-R$ 32,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>25/02/2023</td>
            </tr>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.800,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>22/02/2023</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </>
  )
}

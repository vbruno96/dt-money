import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import {
  PriceHighLight,
  TransactionTable,
  TransactionsContainer,
} from './styles'
import { dataFormatter, priceFormatter } from '../../utils/formater'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dataFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </>
  )
}

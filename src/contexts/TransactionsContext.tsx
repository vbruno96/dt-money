import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TransactionsProviderProps {
  children: ReactNode
}

interface Transaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateNewTransaction {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => void
  createTransaction: (data: CreateNewTransaction) => void
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get<Transaction[]>('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateNewTransaction) {
    const { category, description, price, type } = data
    const response = await api.post<Transaction>('transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date().toISOString(),
    })

    setTransactions((prevTransctions) => [response.data, ...prevTransctions])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

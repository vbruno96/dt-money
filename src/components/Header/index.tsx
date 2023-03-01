import * as Dialog from '@radix-ui/react-dialog'
import logo from '../../assets/logo.svg'
import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  NewTransactionButton,
} from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <img src={logo} alt="" />
          <h1>DT Money</h1>
        </LogoContainer>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

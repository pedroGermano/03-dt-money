import {
  HeaderContainer,
  HeaderContent,
  NewTransactionsButton,
} from "./styles";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Logo ignite" />
        <NewTransactionsButton>Nova Transação</NewTransactionsButton>
      </HeaderContent>
    </HeaderContainer>
  );
}

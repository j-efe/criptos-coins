import { Container } from "./styles";
import Logo from "@/assets/iceberg-icon.svg";

export default function Header() {
  return (
    <Container>
      <div className="header-logo">
        <img src={Logo} alt="logo-iceBerg" />
        <p>IceCoin</p>
      </div>
    </Container>
  );
}

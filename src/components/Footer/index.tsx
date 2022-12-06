import { Container } from "./styles";
import Logo from "../../assets/iceberg-icon.svg";

export default function Footer() {
  return (
    <Container>
      <img src={Logo} alt="logo-iceBerg" />
    </Container>
  );
}

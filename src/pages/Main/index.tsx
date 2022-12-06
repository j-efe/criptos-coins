import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import specificCriptos from "../../services/criptos/specific-criptos";
import CriptoResults from "../../types/CriptoResults";

import { Container, ContainerCriptos, CriptoInfos } from "./styles";

export default function Main() {
  const [criptoCoins, setCriptoCoins] = useState<CriptoResults[]>([]);

  useEffect(() => {
    (async function () {
      const teste = await specificCriptos();
      if (!teste.error) {
        setCriptoCoins(teste.message);
      } else {
        setCriptoCoins(teste.message);
      }
      console.log(criptoCoins);
    })();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <ContainerCriptos>
          <div className="banner-text">
            <p>
              Explore entre as melhores <a className="banner-text-cripto">Criptomoedas</a> , como :
              Bitcoin, Ethereum e Cardano
            </p>
          </div>
          <CriptoInfos>
            {criptoCoins.map((coin) => (
              <div className="cripto-details" key={coin.id}>
                <img src={coin.image} alt="coinImage" />
                <p>{coin.name}</p>
              </div>
            ))}
          </CriptoInfos>
        </ContainerCriptos>
        <Footer />
      </Container>
    </>
  );
}

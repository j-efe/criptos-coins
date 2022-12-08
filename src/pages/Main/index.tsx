import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import SpecificCriptos from "../../services/criptos/specific-criptos";
import CriptoResults from "../../types/CriptoResults";

import { Container, ContainerCriptos, CriptoInfos } from "./styles";

export default function Main() {
  const [criptoCoins, setCriptoCoins] = useState<CriptoResults[]>([]);
  const [specificCoin, setSpecificCoin] = useState<CriptoResults>();

  useEffect(() => {
    (async function () {
      const coins = await SpecificCriptos();
      if (!coins.error) {
        setCriptoCoins(coins.message);
      } else {
        setCriptoCoins(coins.message);
      }
      console.log(criptoCoins);
    })();
  }, []);

  return (
    <>
      {specificCoin && <Modal {...specificCoin} />}

      <Container>
        <Header />
        <ContainerCriptos>
          <div className="banner-text">
            <p>
              Explore dentre as melhores <a className="banner-text-cripto">Criptomoedas</a> do
              mercado , como : Bitcoin, Ethereum e Cardano
            </p>
          </div>
          <CriptoInfos>
            {criptoCoins.map((coin) => (
              <div onClick={() => setSpecificCoin(coin)} className="cripto-details" key={coin.id}>
                <img src={coin.image} alt="coinImage" />
                <p>{coin.name}</p>
                <p className="coin-value">R$ {coin.current_price}</p>
                <p className="current-price-text">(Valor atual)</p>
              </div>
            ))}
          </CriptoInfos>
        </ContainerCriptos>
        <Footer />
      </Container>
    </>
  );
}

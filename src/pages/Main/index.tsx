import { useEffect, useContext } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { UserContext } from "@/contexts/userContext";
import SpecificCriptos from "@/services/criptos/specific-criptos";
import CriptoResults from "@/interfaces/CriptoResults";

import { Container, ContainerCriptos, CriptoInfos } from "./styles";

export default function Main() {
  const {
    criptoCoins,
    setCriptoCoins,
    specificCoin,
    setSpecificCoin,
    openModalCoin,
    setOpenModalCoin,
  } = useContext(UserContext);

  useEffect(() => {
    (async function () {
      const coins = await SpecificCriptos();
      if (!coins.error) {
        setCriptoCoins(coins.message);
      } else {
        setCriptoCoins(coins.message);
      }
    })();
  }, []);

  function handleOpenModal({ id, name, image, current_price }: CriptoResults) {
    setSpecificCoin({ id, name, image, current_price });
    setOpenModalCoin(!openModalCoin);
  }

  return (
    <>
      {openModalCoin && <Modal {...specificCoin} />}
      <Header />
      <Container>
        <ContainerCriptos>
          <div className="banner-text">
            <p>
              Explore dentre as melhores <a className="banner-text-cripto">Criptomoedas</a> do
              mercado , como : Bitcoin, Ethereum e Cardano
            </p>
          </div>
          <CriptoInfos>
            {criptoCoins.map((coin) => (
              <div onClick={() => handleOpenModal(coin)} className="cripto-details" key={coin.id}>
                <img src={coin.image} alt="coinImage" />
                <p>{coin.name}</p>
                <p className="coin-value">R$ {coin.current_price}</p>
                <p className="current-price-text">(Valor atual)</p>
              </div>
            ))}
          </CriptoInfos>
        </ContainerCriptos>
      </Container>
      <Footer />
    </>
  );
}

import ArrowLeft from "@/assets/arrow-left.svg";
import { UserContext } from "@/contexts/userContext";
import CriptoResults from "@/interfaces/CriptoResults";
import timelapseCripto from "@/services/criptos/timelapseCripto";
import { useContext } from "react";
import { Background, Card } from "./styles";

export default function Modal({ id, name, image, current_price }: CriptoResults) {
  const { chosenDate, setChosenDate, coinAtDay, setCoinAtDay, openModalCoin, setOpenModalCoin } =
    useContext(UserContext);

  function handleChosenDate(date: string) {
    const year = date.slice(0, 4);
    const month = date.slice(5, 8);
    const day = date.slice(8) + "-";

    setChosenDate(day + month + year);
  }

  async function handleSubmitConsult(e: any) {
    e.preventDefault();

    const criptoLapse = await timelapseCripto(id, chosenDate);

    if (!criptoLapse.error) {
      setCoinAtDay(criptoLapse.message);
    } else {
      setCoinAtDay("erro");
    }
  }

  function handleClosemodal() {
    setOpenModalCoin(!openModalCoin);
    setChosenDate("");
    setCoinAtDay("");
  }
  return (
    <Background>
      <Card>
        <div className="internal-container">
          <img onClick={handleClosemodal} className="arrow-exit" src={ArrowLeft} alt="ArrowLeft" />
          <img src={image} alt="cripto-image" />
          <p>{name}</p>

          <div className="cripto-prices">
            <div className="cripto-prices__currently">
              <p>Valor atual:</p>
              <h1>R$ {current_price}</h1>
            </div>

            <div className="cripto-prices__consult">
              <form onSubmit={handleSubmitConsult}>
                <p>Valores anteriores?</p>
                <input type="date" onChange={(e) => handleChosenDate(e.target.value)} />
                <button type="submit">Consultar</button>
                <div>
                  <p className="cripto-prices__title">Valor neste dia:</p>
                  <p className="cripto-prices__informedValue">
                    {coinAtDay === "erro"
                      ? "Informe uma data válida"
                      : `R$ ${Number(coinAtDay).toFixed(2)}`}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </Background>
  );
}

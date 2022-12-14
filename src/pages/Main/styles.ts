import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const ContainerCriptos = styled.main`
min-width: 100%;
height: 100%;
margin-top: 6rem;
border-radius: 2rem;
background:  rgb(225,228,232);

display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 500px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

@media (min-width: 1000px) {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.banner-text {
  @media (min-width: 350px) {
      width: 40rem;
      padding: 3.5rem;
      display: flex;
      text-align: center;
     
    }

  p{
    font-size: 2.5rem;
    font-weight: 900;  
  }

  .banner-text-cripto {
    color: rgb( 231,150,9);
  }

}
`
export const CriptoInfos = styled.div`
width: 40rem;
height: 65%;
padding: 1rem;
gap: 1rem;

display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

white-space: nowrap;
overflow-y: scroll;
text-overflow: ellipsis;


img {
  width: 5rem;
}

.cripto-details {
  width: 14rem;

  padding: 1rem;
  border-radius: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  p {
    font-weight: 800;
  }

  .coin-value {
    font-size: 2rem;
  }

  .current-price-text{
    font-size: 1.3rem;
    font-weight: 400;
  }

  &:hover{
    cursor: pointer;
    transform: scale(1.05);
  }
}

`
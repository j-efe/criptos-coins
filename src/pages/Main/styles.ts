import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerCriptos = styled.div`
width: 100%;
height: 45rem;
padding: 2rem 8rem;
gap: 10rem;

display: flex;
align-items: center;
justify-content: space-evenly;


margin-top: 2rem;
border-radius: 3rem;
background-color:  rgb(225,228,232);

.banner-text {
  display: flex;
  width: 40rem;
  padding: 1rem;
  
  p{
    font-size: 3rem;
    font-weight: 900;
  }

  .banner-text-cripto {
    color: rgb( 231,150,9);
  }
}
`
export const CriptoInfos = styled.div`
width: 45rem;
height: 40rem;

display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 2rem;


img {
  width: 7rem;
}

.cripto-details {
  width: 13rem;
  padding: 1.5rem;
  border-radius: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  p {
    font-weight: 800;
  }
}

`
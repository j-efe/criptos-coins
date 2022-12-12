import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(51, 51, 51, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 99;
`;

export const Card = styled.div`
  width: 60rem;
  height: 50rem;
  background: #ffffff;
  border-radius: 4.2rem;
  padding: 1rem ;

  .internal-container{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 1rem;
    border-radius: 4rem;

    background:  rgb(225,228,232);

    img{
      width: 10rem;
    }

    p {
      font-size: 2rem;
      font-weight: 600;
    }
  }

  .arrow-exit {
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: 2rem;
    left: 1rem;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  .cripto-prices {
    width:100%;
    height: 100%;
    padding: 0.5rem;

    display: flex;
    gap: 1rem;
  }
  
  .cripto-prices__currently, .cripto-prices__consult {
    width: 100%;
    background: #FFF;
    border-radius: 1.5rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .cripto-prices__currently {
  
    p {
      font-size: 2.4rem;
      font-weight: 600;
    }
    
    h1 {
      font-size: 3rem;
      text-decoration: underline 0.3rem  rgb(11,189,200);
    }
  }

  .cripto-prices__consult {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 1.2rem;
    }

    input {
      all: unset;
      width: 15rem;
      height: 2rem;
      padding: 0.5rem;
      border: 0.2rem solid rgb(11,189,200);
      border-radius: 1rem;
    }

    button {
      all: unset;
      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 600;
      width: 10rem;
      height: 2rem;
      padding: 0.5rem;
      background: rgb(11,189,200);
      border-radius: 1rem;

      &:hover {
        cursor: pointer;
        transform: scale(1.04);
      }
    }

    .cripto-prices__title {
      display: flex;
      align-content: center;
      justify-content: center;
      font-size: 1.6rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

   .cripto-prices__informedValue {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(225,228,232);
      border-radius: 1rem;
      padding: 1rem;
      font-size: 2rem;
      }

  }
`;

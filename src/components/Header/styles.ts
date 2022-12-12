import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;

  width: 100%;
  height: 7rem;
  padding: 3rem 6rem ;
  background: #FFF;

  img {
    width: 4rem;
  }

  .header-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    p {
      font-size: 2.5rem;
      font-weight: 800;
      color: rgb(11,189,200);

    }

    
  }

  .header-infos {
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    p{
      cursor: pointer;
      font-size: 2rem;
      font-weight: 600;

      &:hover {
        text-decoration: underline 0.3rem;
        text-decoration-color: rgb(11,189,200);
        
      }
    }
  }
`
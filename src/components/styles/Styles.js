import styled from 'styled-components';

export const CalculatorStyles = styled.div`
  background-color: black;
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;

  .display {
    font-family: Cursive;
    /* grid-area: display; */
    margin: 0 !important;
    width: 100%;

    h1 {
      font-size: 4rem;
      color: white;
      text-align: center;
    }
  }
  .number-pad {
    /* grid-area: numbers; */
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 450px;
    margin: 0 auto;
    font-family: Cursive;
    button {
      width: 100%;
      height: 80px;
      border-radius: 20px;
      border: 3px solid white;
      font-size: 2rem;
      color: #A52A2A;
      font-family: Cursive;
      background: #F5F5DC;
      &:focus {
        outline: none;
      }
      &:hover {
        border: 3px solid #F5F5DC;
        font-weight: 500;
      }
    }
    button.function-button {
      background-color: #008B8B;
    }
    button.white-button {
      color: #2d3436;
      background-color: white;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  border: 4px solid white;
  max-width: 700px;
  margin: 10px auto;
  align-items: center;
  border-radius: 5px;
  background: #e17055;

  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;
    border-bottom: 4px solid white;
    padding: 15px 20px;
  }
  h2.long-main-display {
    font-size: 1.2rem;
  }
  p {
    margin: 5px 0;
    font-size: 1.3rem;

  }
  p.long-stored-display {
    font-size: 0.5rem;
  }
`;
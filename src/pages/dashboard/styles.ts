import styled from 'styled-components';

import { shade } from 'polished';

export const Title = styled.h1`
  color: #3A3A3A;
  font-size: 48px;
  line-height: 56px;
  margin-top: 80px;
  max-width: 450px;
`;

export const Form = styled.form`
  display: flex;

  margin-top: 40px;
  max-width: 700px;

  input {
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    flex: 1;
    height: 70px;
    padding: 0 24px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-weight: bold;
    height: 70px;
    transition: background-color 0.2s;
    width: 210px;

    &:hover {
      background: ${shade(0.2, '#04d361')}
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    display: block;
    padding: 24px;
    text-decoration: none;
    width: 100%;

    display: flex;
    align-items: center;

    //Toda a repetição de elementos ancora terão esse estilo aplicado
    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
      transition: transform 0.2s;
    }

  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      color: #3d3d4d;
      font-size: 20px;
    }

    p {
      color: #a8a8b3;
      font-size: 18px;
      margin-top: 4px;
    }
  }

  img {
    border-radius: 50%;
    height: 64px;
    width: 64px;
  }

  svg {
    color: #cbcbd6;
    margin-left: auto;
  }
`;

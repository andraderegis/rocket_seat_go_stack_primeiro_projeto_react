import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    align-items: center;
    color: #a8a8b3;
    transition: 0.2s;
    display: flex;

    text-decoration: none;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    align-items: center;
    display: flex;

    img {
      border-radius: 50%;
      height: 120px;
      width: 120px;
    }

    div {
      margin-left: 24px;

      strong {
        color: #3d3d4d;
        font-size: 36px;
      }

      p {
        color: #737380;
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        color: #3d3d4d;
        display: block;
        font-size: 36px;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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

  svg {
    color: #cbcbd6;
    margin-left: auto;
  }
`;

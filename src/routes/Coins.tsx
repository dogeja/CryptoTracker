import styled from "styled-components";
import { Link } from "react-router-dom";
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 4rem;
  font-weight: 900;
  font-family: "Montserrat", sans-serif;
`;
const Container = styled.div`
  padding: 0px 20px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul`
  font-weight: 700;
`;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  font-family: "NanumSquare", sans-serif;
  a {
    padding: 20px;
    display: block;
    transition: color 0.5s ease-in;
  }
  &:hover {
    cursor: pointer;
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

const Coins = () => {
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`${coin.id}`}> {coin.name} &rarr; </Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
};

export default Coins;

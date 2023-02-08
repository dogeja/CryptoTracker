import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 1.8rem;
  font-family: "NanumSquareNeo-Variable";
  font-weight: 900;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  img {
    width: 80px;
    height: 80px;
    transition: 4s ease-in 0.4s;
  }
  &:hover {
    img {
      transform: translateY(-200px);
    }
  }
`;
const CoinsList = styled.ul`
  font-weight: 700;
  font-family: "NanumSquareNeo-Variable";
`;
const Coin = styled.li`
  background-color: ${(props) => props.theme.ListColor};
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  font-family: "NanumSquareNeo-Variable";
  box-shadow: 0 3px 3px ${(props) => props.theme.ListColor};
  a {
    padding: 20px;
    display: block;
    transition: color 0.5s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    cursor: pointer;
    transition: 0.4s;
    transform: translateX(0.075rem);
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
  &:active {
    transition: 0.3s;
    transform: translateX(4px);
    background-color: ${(props) => props.theme.bgColor};
    box-shadow: 0 3px 3px ${(props) => props.theme.bgColor};
  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 0.5rem;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  console.log(coins);
  return (
    <Container>
      <Header>
        <Img src="https://media1.giphy.com/media/SixRnKkqPYhRgSJ4Vj/giphy.gif?cid=6c09b952bpwm1m4w6idkb3gry3pr3sww8svfsky6x9xg1nor&rid=giphy.gif&ct=s"></Img>
        {loading ? <Title>로딩중...</Title> : <Title>!비트코인!</Title>}
        <Img src="https://media1.giphy.com/media/SixRnKkqPYhRgSJ4Vj/giphy.gif?cid=6c09b952bpwm1m4w6idkb3gry3pr3sww8svfsky6x9xg1nor&rid=giphy.gif&ct=s"></Img>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link
              to={{
                pathname: `/${coin.id}`,
                state: { name: coin.name },
              }}
            >
              <Img
                src={` https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
              />
              <div>{coin.name} &rarr; </div>
            </Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
};

export default Coins;

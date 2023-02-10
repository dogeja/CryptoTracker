import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
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
    margin: 0;
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
const ThemeChanger = styled.div`
  width: 48px;
  height: 48px;
  margin-left: 1.2rem;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.ListColor};
  border-radius: 12px;
  align-items: center;
  text-align: center;
  line-height: 24px;
  font-weight: 900;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: "NanumSquareNeo-Variable";
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 0.5rem;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface ICoinsProps {
  toggleDark: () => void;
  isDark: boolean;
}
const Coins = ({ toggleDark, isDark }: ICoinsProps) => {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  return (
    <Container>
      <Helmet>
        <title>!비트코인!</title>
      </Helmet>
      <Header>
        <Img src="https://media1.giphy.com/media/SixRnKkqPYhRgSJ4Vj/giphy.gif?cid=6c09b952bpwm1m4w6idkb3gry3pr3sww8svfsky6x9xg1nor&rid=giphy.gif&ct=s"></Img>
        {isLoading ? <Title>로딩중...</Title> : <Title>!비트코인!</Title>}
        <ThemeChanger onClick={toggleDark}>
          {isDark ? "!밝은!" : "!다크!"}
          <br />
          !모드!
        </ThemeChanger>
      </Header>
      <CoinsList>
        {data?.slice(0, 100).map((coin) => (
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

import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import { useState } from "react";
interface RouteParams {
  coinId: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 2rem;
  font-family: "NanumSquareNeo-Variable";
  font-weight: 900;
`;
const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 0.5rem;
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
    transition: 4s ease-in 0.1s;
  }
  &:hover {
    img {
      transform: rotate(720deg);
    }
  }
`;
interface RouteState {
  name: string;
}

const Coin = () => {
  const [loading, setLoading] = useState(false);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Img src="https://media1.giphy.com/media/SixRnKkqPYhRgSJ4Vj/giphy.gif?cid=6c09b952bpwm1m4w6idkb3gry3pr3sww8svfsky6x9xg1nor&rid=giphy.gif&ct=s"></Img>
        {loading ? (
          <Title>로딩중...</Title>
        ) : (
          <Title>{state?.name || "로딩중..."}</Title>
        )}
        <Img src="https://media1.giphy.com/media/SixRnKkqPYhRgSJ4Vj/giphy.gif?cid=6c09b952bpwm1m4w6idkb3gry3pr3sww8svfsky6x9xg1nor&rid=giphy.gif&ct=s"></Img>
      </Header>
    </Container>
  );
};

export default Coin;

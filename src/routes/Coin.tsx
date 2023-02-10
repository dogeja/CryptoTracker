import { useEffect, useState } from "react";
import {
  Switch,
  Route,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Price from "./Price";
import Chart from "./Chart";
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
  display: flex;
  transition: 0.4s ease-in-out;
  span {
    align-items: center;
    position: relative;
    margin: 0 auto;
    left: 0;
    right: 0;
    font-size: 1.8rem;
  }
  &:hover {
    color: ${(props) => props.theme.ListColor};
  }
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 0.7rem;
  transition: 4s ease-in 0.1s;
`;
const Img2 = styled.img`
  width: 80px;
  height: 80px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:hover {
    img {
      transform: rotate(720deg);
    }
  }
`;
const Tabs = styled.div`
  display: flex;
  margin: 25px 0px;
  justify-content: space-around;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 40vw;
  transition: 0.2s ease-in-out;
  color: ${(props) => (props.isActive ? props.theme.accentColor : null)};
  &:hover {
    background-color: rgba(51, 38, 51, 0.3);
  }
  a {
    padding: 14px 0px;
    display: block;
  }
`;
const Article = styled.div`
  color: ${(props) => props.theme.ListColor};
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 0.4rem;
  font-family: "Montserrat";
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.accentColor};
  margin: 0 auto;
  margin: 20px 0px;
  line-height: 0.8rem;
  height: 400px;
  font-family: "Montserrat";
  max-width: 96vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.6s ease-in-out;
  div {
    font-family: "NanumSquareNeo-Variable";
    font-size: 1.2rem;
    padding: 1rem 0;
    text-transform: uppercase;
  }
  &:hover {
    line-height: 1.6rem;
    color: ${(props) => props.theme.ListColor};
    max-width: 96vw;
    white-space: normal;
    opacity: 1;
    overflow-x: hidden;
    height: fit-content;
  }
`;
interface RouteState {
  name: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<IInfoData>();
  const [priceInfo, setPriceInfo] = useState<IPriceData>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, [coinId]);
  /* 
  useEffect(
      //실행될 함수(useEffect 첫번째 매개 함수) 
    ()=>{
       //익명 함수
      (async()=>{
          //fetch함수(api콜)
          const response = await fetch("url");
          const json = await response.json();
          }
          //fetch함수 종료 (api콜)
      )
      // 익명 함수 종료
      ();
      // 즉시 실행용 괄호
    })
    // 실행될 함수 종료(useEffect 첫번째 매개 함수) 
    ,[]
    //state변화 감지용     
    );
  
  */
  return (
    <Container>
      <Header>
        {loading ? (
          <Img2 src="https://media1.giphy.com/media/SixRnKkqPYhRgSJ4Vj/giphy.gif?cid=6c09b952bpwm1m4w6idkb3gry3pr3sww8svfsky6x9xg1nor&rid=giphy.gif&ct=s"></Img2>
        ) : (
          <Img
            src={` https://coinicons-api.vercel.app/api/icon/${info?.symbol.toLowerCase()}`}
          ></Img>
        )}

        {loading ? (
          <Title>로딩중...</Title>
        ) : (
          <Title>
            <Link to={`/`}>
              {state?.name ? state.name : loading ? "로딩중..." : info?.name}
            </Link>
          </Title>
          //state는 useLocation()을 이용한
          //user Location의 정보를 담은 객체.
          /* 
           state는 기존 메인페이지에서 넘어온 정보이므로
           첫번째 삼항연산자에서 false인 경우는
           첫 접근이 하위페이지인 경우이다.
          */
          /* 
            state?.name =>state.name이 있나요??
              true: state.name
              false:
                loading중인가요?
                  true : "로딩중.."
                  false : info?.name 
                    =>info객체의 name이 존재하면 출력  
          */
        )}
        {loading ? (
          <Img2 src="https://media1.giphy.com/media/SixRnKkqPYhRgSJ4Vj/giphy.gif?cid=6c09b952bpwm1m4w6idkb3gry3pr3sww8svfsky6x9xg1nor&rid=giphy.gif&ct=s"></Img2>
        ) : (
          <Img
            src={` https://coinicons-api.vercel.app/api/icon/${info?.symbol.toLowerCase()}`}
          ></Img>
        )}
      </Header>

      {loading ? (
        <Title>
          <span>불러오는 중...</span>
        </Title>
      ) : (
        <Article>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Switch>
            <Route path={`/${coinId}/price`}>
              <Price />
            </Route>
            <Route path={`/${coinId}/chart`}>
              <Chart />
            </Route>
          </Switch>
          <Description>
            <div>{`ABOUT - ${coinId} `}</div>
            {info?.description}
          </Description>
        </Article>
      )}
    </Container>
  );
};

export default Coin;

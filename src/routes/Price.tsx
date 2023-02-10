import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

interface PriceProps {
  coinId: string;
}
interface PriceData {
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

const Today = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;
const Container = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
`;
const PriceNowon = styled.span<{ plus?: boolean }>`
  font-family: "NanumSquareNeo-Variable";
  font-weight: 900;
  color: ${(props) => (props.plus ? `#15e264` : `#e61102`)};
  span {
    padding-top: 0.4rem;
    opacity: 0.8;
  }
`;

function isValuePlus(value: number | undefined) {
  if (value) {
    return value > 0;
  }
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ["price", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        "Loading price..."
      ) : (
        <Container>
          <Today>
            <PriceNowon
              plus={
                isValuePlus(data?.quotes.USD.market_cap_change_24h) === true
              }
            >
              $ {data?.quotes.USD.price.toFixed(4)}
            </PriceNowon>
          </Today>
        </Container>
      )}
    </div>
  );
}

export default Price;

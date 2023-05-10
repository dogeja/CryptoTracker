// @ts-nocheck

import { useQuery } from "react-query";
import { fetchChart } from "../api";
import ApexCharts from "react-apexcharts";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";
interface IData {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}
const Chart = ({ coinId }) => {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IData[]>(
    ["Chart", coinId],
    () => fetchChart(coinId),
    {
      refetchInterval: 8000,
    }
  );
  return (
    <>
      {isLoading ? (
        "로딩중"
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              data: data?.map((price) => {
                return [
                  price.time_close,
                  [price.open, price.high, price.low, price.close],
                ];
              }),
            },
          ]}
          options={{
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#15e264",
                  downward: "#e61102",
                },
              },
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              type: "candlestick",
              height: 350,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {
              show: true,
            },
            title: {
              text: "차트",
              align: "left",
            },
            xaxis: {
              type: "datetime",
              labels: { show: true },
              axisBorder: { show: true },
              axisTicks: { show: true },
            },
            yaxis: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
          }}
        />
      )}
    </>
  );
};
export default Chart;
// 아이디의 Chart값으로 Link이용,
// useParams ID이용,
// 가격 띄워주기(탭)

const BASE_URL = `https://api.coinpaprika.com/v1`;
export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
  // 홈으로 돌아가는 경우에 재로딩 하지 않는 이유는
  // react query가 fetch해서 담은 json을 캐시에 저장하기 때문이다.
  /*   
  const{ isLoading, data} = useQuery<타입스크립트인터페이스>("allCoins",함수명);
   allCoins를 캐시에 담음
  */
  // json data의 promise
}
export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}
export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
export function fetchChart(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
/*   const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []); */

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

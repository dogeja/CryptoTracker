export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
  // 홈으로 돌아가는 경우에 재로딩 하지 않는 이유는
  // react query가 fetch해서 담은 json을 캐시에 저장하기 때문이다.
  /*   
  const{ isLoading, data} = useQuery<타입스크립트인터페이스>("allCoins",함수명);
   allCoins를 캐시에 담음
  */
  // json data의 promise
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

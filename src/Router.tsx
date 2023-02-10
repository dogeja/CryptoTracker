import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}
const Router = ({ toggleDark, isDark }: IRouterProps) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark} />
        </Route>
        <Route path="/">
          <Coins isDark={isDark} toggleDark={toggleDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;

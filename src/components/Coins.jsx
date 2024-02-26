import CoinItem from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";

function Coins({ coins }) {
  return (
    <div className="container">
      <div></div>
      <div className="heading">
        <p>#</p>
        <p className="coin-name">Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Market cap</p>
      </div>

      {coins.map((c) => {
        return (
          <Link to={`/coin/${c.id}`} key={c.id}>
            <CoinItem key={c.id} coins={c} />
          </Link>
        );
      })}
    </div>
  );
}

export default Coins;

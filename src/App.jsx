import { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import NavBar from "./components/NavBar";
import Coin from "./routes/Coin/Coin";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setCoins(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":id" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { createContext, useContext, useEffect, useState } from 'react';
import API_URL from '../api';

const LivePricesContext = createContext(null);

const STABLE = new Set(['tether', 'usdc']);

function fmt(p) {
  if (p >= 10000) return parseFloat(p.toFixed(2));
  if (p >= 100)   return parseFloat(p.toFixed(2));
  if (p >= 10)    return parseFloat(p.toFixed(3));
  if (p >= 1)     return parseFloat(p.toFixed(4));
  return parseFloat(p.toFixed(5));
}

// Map backend coin to the shape the frontend expects
function mapCoin(c) {
  return {
    id: c.symbol.toLowerCase(),   // e.g. "btc"
    name: c.name,
    symbol: c.symbol,
    price: c.price,
    change24h: c.change24h,
    marketCap: c.price * 1_000_000, // estimated fallback
    image: c.image,
    _dir: 0,
    _tick: 0,
    _basePrice: c.price,           // keep original for 24h calc
  };
}

export function LivePricesProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch crypto data from backend on mount
  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const res = await fetch(`${API_URL}/crypto`);
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setCoins(data.data.map(mapCoin));
        }
      } catch (err) {
        console.error('Failed to fetch crypto data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
  }, []);

  // Simulate live price ticks after data is loaded
  useEffect(() => {
    if (coins.length === 0) return;

    const id = setInterval(() => {
      setCoins(prev =>
        prev.map(coin => {
          if (STABLE.has(coin.id)) return coin;

          const magnitude = 0.0005 + Math.random() * 0.0035;
          const dir = Math.random() > 0.46 ? 1 : -1;
          const newPrice = fmt(coin.price * (1 + dir * magnitude));
          const newChange24h = parseFloat(((newPrice - coin._basePrice) / coin._basePrice * 100).toFixed(2));

          return {
            ...coin,
            price: newPrice,
            change24h: newChange24h,
            _dir: dir,
            _tick: coin._tick + 1,
          };
        })
      );
    }, 2000);

    return () => clearInterval(id);
  }, [coins.length]);

  return (
    <LivePricesContext.Provider value={loading ? [] : coins}>
      {children}
    </LivePricesContext.Provider>
  );
}

export const useLivePrices = () => useContext(LivePricesContext);

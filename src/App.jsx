import { useState } from "react";
import "./style.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Sandal Luxury", price: 35 },
    { id: 2, name: "Bijoux Gold Style", price: 20 },
    { id: 3, name: "Perfume Elegant", price: 45 },
    { id: 4, name: "Shein Outfit", price: 30 }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <header>
        <h1>Queque Magic Store LLC</h1>
        <p>Sandal • Bijoux • Perfume • Fashion</p>
      </header>

      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart.map((c, i) => (
          <p key={i}>{c.name} - ${c.price}</p>
        ))}
        <h3>Total: ${total}</h3>
      </div>

      <div className="payment">
        <h2>Payment</h2>
        <p>CashApp: $quequemagicstorellc</p>
        <p>Zelle: 863-604-9855</p>
        <p>Email: quequemagicstorellc@gmail.com</p>
      </div>
    </div>
  );
}

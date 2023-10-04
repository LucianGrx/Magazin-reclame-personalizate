import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('jwt');
  const apiUrl = import.meta.env.VITE_REACT_APP_UPLOAD_URL;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${apiUrl}/users/me?populate=*`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUser(result.data);
    };

    fetchData();
  }, []);

  if (!user) {
    return <div>Încărcare...</div>;
  }

  return (
    <div>
      <h2>Istoric comenzi pentru {user.username}</h2>
      {user.orders.map(order => (
        <div key={order.id}>
          <p>ID Comanda: {order.id}</p>
          <p>Produse:</p>
          <ul>
            {order.products.map(product => (
              <li key={product.id}>
                {product.title} - {product.price} RON
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
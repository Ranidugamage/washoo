import React from 'react';
import './styles.css';

const OrderPage = () => {
  const orders = [
    {
      id: 1,
      store: 'Laundry Store 1',
      picture: 'https://picsum.photos/200',
      amount: '$10',
      date: '2023-03-02',
    },
    {
      id: 2,
      store: 'Laundry Store 2',
      picture: 'https://picsum.photos/200',
      amount: '$15',
      date: '2023-03-05',
    },
    {
      id: 3,
      store: 'Laundry Store 3',
      picture: 'https://picsum.photos/200',
      amount: '$20',
      date: '2023-03-10',
    },
  ];

  return (
    <div className="order-page-container">
      <h2>My Orders</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Laundry Store</th>
            <th>Picture</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.store}</td>
              <td>
                <img src={order.picture} alt="Order" />
              </td>
              <td>{order.amount}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
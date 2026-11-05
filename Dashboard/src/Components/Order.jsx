import React, { useState, useEffect } from "react";
import { ClientServer } from "../ClientServer";
import "./Order.css";

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await ClientServer.get("/allOrders");
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatPrice = (price) => {
    return Number(price).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });
  };

  if (loading) {
    return (
      <div className="orders-page">
        <div className="orders-loading">
          Loading your orders...
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">

      {/* Page heading */}
      <div className="orders-header">
        <div>
          <h2>Orders</h2>
          <p>Track and manage your stock orders</p>
        </div>

        <div className="orders-count">
          {orders.length} Orders
        </div>
      </div>

      {/* Orders table */}
      <div className="orders-card">

        {orders.length === 0 ? (
          <div className="orders-empty">
            <div className="empty-icon">↗</div>

            <h3>No orders yet</h3>

            <p>
              Your orders will appear here once you
              start buying or selling stocks.
            </p>
          </div>
        ) : (
          <div className="orders-table-wrapper">
            <table className="orders-table">

              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Order ID</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>

                    <td>
                      <div className="stock-info">
                        <div className="stock-avatar">
                          {order.name?.charAt(0)}
                        </div>

                        <span className="stock-name">
                          {order.name}
                        </span>
                      </div>
                    </td>

                    <td className="order-id">
                      #{order._id?.slice(-6).toUpperCase()}
                    </td>

                    <td>
                      <span
                        className={`order-type ${
                          order.mode?.toLowerCase()
                        }`}
                      >
                        {order.mode}
                      </span>
                    </td>

                    <td>{order.qty}</td>

                    <td>{formatPrice(order.price)}</td>

                    <td className="order-total">
                      {formatPrice(order.qty * order.price)}
                    </td>

                    <td className="order-date">
                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "—"}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

      </div>

      <div className="orders-footer">
        Showing {orders.length} orders
      </div>

    </div>
  );
}

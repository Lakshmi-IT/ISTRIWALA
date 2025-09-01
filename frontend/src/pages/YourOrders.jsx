import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/url";

export default function YourOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchOrders = async () => {
      try {
        const res = await fetch(`${BASE_URL}api/orders/my-orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) {
          setOrders(data.orders);
        }
      } catch (err) {
        console.error("Failed to load orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

if (loading)
  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg">
                  Order #{order._id.slice(-6)}
                </h2>
                <span
                  className={`px-3 py-1 rounded text-sm ${order.orderStatus === "PAID"
                      ? "bg-green-100 text-green-700"
                      : order.orderStatus === "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {order.orderStatus}
                </span>
              </div>

              <p className="text-sm text-gray-600">
                Payment: {order.paymentMethod}{" "}
                {order.paymentId ? `(ID: ${order.paymentId})` : ""}
              </p>

               <p className="text-sm text-gray-600">
                Total Price: ₹ {order?.cartId?.totalPrice}
                
              </p>
           

              <p className="text-sm text-gray-600">
                Date: {new Date(order.createdAt).toLocaleString()}
              </p>

              {/* Items */}
              <div className="mt-3">
                <h3 className="font-semibold">Items:</h3>
                <ul className="lg:flex justify-between items-center text-sm space-y-3">
                  {Object?.entries(
                    order?.cartId?.items?.reduce((acc, item) => {
                      if (!acc[item.category]) acc[item.category] = [];
                      acc[item.category].push(item);
                      return acc;
                    }, {})
                  ).map(([category, items]) => (
                    <li key={category}>
                      <h3 className="font-bold text-primary border-b mb-1">{category}</h3>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        {items.map((item, idx) => (
                          <li key={idx}>
                            {item.item} ₹{item?.price} × {item.qty}  = ₹{item.price * item.qty}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Address */}
              {order.addressId && (
                <div className="mt-3 text-sm text-gray-700">
                  <h3 className="font-semibold">Delivery Address:</h3>
                  <p>
                    {order.addressId.street}, {order.addressId.city},{" "}
                    {order.addressId.state} - {order.addressId.pincode}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type OrderItem = {
  id: number;
  menuId: number;
  quantity: number;
};

type Order = {
  id: number;
  total: number;
  status: string;
  createdAt?: string;
  items: OrderItem[];
};

export default function OrderPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  const formatRupiah = (n: number) =>
    "Rp " + (n * 1000).toLocaleString("id-ID");

  // 🔥 FETCH ORDERS
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders");
      const data = await res.json();

      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const load = async () => {
      await fetchOrders();
    };

    load();
  }, []);

  return (
    <div className="min-h-screen bg-[#e9f0ea] p-6">
      <h1 className="text-2xl font-bold mb-6 text-green-900">
        📊 Order History
      </h1>

      {orders.length === 0 && (
        <p className="text-gray-500">Belum ada transaksi</p>
      )}

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            {/* HEADER */}
            <div className="flex justify-between mb-3">
              <div>
                <p className="font-semibold text-gray-800">
                  Order #{order.id}
                </p>
                <p className="text-sm text-gray-500">
                  {order.status}
                </p>
              </div>

              <div className="font-bold text-black">
                {formatRupiah(order.total)}
              </div>
            </div>

            {/* ITEMS */}
            <div className="text-sm text-gray-600">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>Menu ID: {item.menuId}</span>
                  <span>x{item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
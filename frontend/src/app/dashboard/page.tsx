"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

type CartItem = MenuItem & {
   id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
  note?: string;
};

const menu: MenuItem[] = [
  { id: 1, name: "Espresso", price: 20, image: "/espresso.png", category: "Coffee" },
  { id: 2, name: "Cappuccino", price: 25, image: "/cappuccino.png", category: "Coffee" },
  { id: 3, name: "Latte", price: 28, image: "/latte.png", category: "Coffee" },
  { id: 4, name: "Americano", price: 22, image: "/americano.png", category: "Coffee" },
  { id: 5, name: "Green Tea", price: 18, image: "/greentea.png", category: "Tea" },
  { id: 6, name: "Croissant", price: 15, image: "/croissant.png", category: "Snack" },
  { id: 7, name: "French Fries", price: 15, image: "/frenchfries.png", category: "Snack" },
  { id: 8, name: "Cinnamon Roll", price: 25, image: "/cinnamon.png", category: "Snack" },
  { id: 9, name: "Pancake", price: 15, image: "/pancake.png", category: "Snack" },
];

export default function Dashboard() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [clickedId, setClickedId] = useState<number | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [orderType, setOrderType] = useState("Dine In");
  const [showCart, setShowCart] = useState(true);
  const [flyingItem, setFlyingItem] = useState<MenuItem | null>(null);


  //  FORMAT RUPIAH
  const formatRupiah = (number: number) => {
    return "Rp " + (number * 1000).toLocaleString("id-ID");
  };

  //  GET QTY (UNTUK BADGE)
  const getQty = (id: number) => {
    const found = cart.find((item) => item.id === id);
    return found ? found.qty : 0;
  };

  //  ADD TO CART
  const addToCart = (item: MenuItem) => {
    setShowCart(true);
    setClickedId(item.id);
    setTimeout(() => setClickedId(null), 150);

    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // ➕
  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖
  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };
      const updateQty = (id: number, qty: number) => {
        if (qty < 1) return;

        setCart((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, qty } : item
          )
        );
      };
  //  REMOVE
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  //  FILTER
  const filteredMenu = menu.filter((item) => {
    const matchCategory =
      category === "All" || item.category === category;

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
});

  //  TOTAL
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
    const router = useRouter();

    const handleLogout = () => {
      localStorage.removeItem("user");
      router.push("/login");
    };

    const fetchOrders = async () => {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/orders");
      const data = await res.json();

    setOrders(data);
    setLoading(false);
    };

    function setOrders(data: CartItem) {
      throw new Error("Function not implemented.");
    }
    const updateNote = (id: number, note: string) => {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, note } : item
    )
  );
};
  return (

<div className="bg-[#e9f0ea] min-h-screen p-6">

  {/* ================= HEADER ================= */}
  <div className="flex justify-between items-center mb-6">

    {/* LEFT */}
    <div className={`${showCart ? "lg:col-span-2" : "lg:col-span-3"} transition-all`}>
      <img src="/theessence.png" className="w-10" />
      <h1 className="text-3xl font-bold text-green-900">
        The Essence
      </h1>
    </div>

    {/* RIGHT PROFILE */}
    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow">
      <div className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center">
        {user?.name?.charAt(0) || "U"}
      </div>

      <div className="text-sm">
        <p className="font-semibold text-gray-800">{user?.name}</p>
        <p className="text-gray-500 text-xs">Cashier</p>
      </div>

      <button
        onClick={handleLogout}
        className="ml-3 text-red-500 text-sm hover:underline"
      >
        Logout
      </button>
    </div>
  </div>

  {/* ================= SEARCH ================= */}
  <div className="flex items-center bg-white px-3 py-2 rounded-xl shadow-sm border mb-4">
    <Search className="w-4 h-4 text-gray-500" />

    <input
      type="text"
      placeholder="Search menu..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="ml-2 w-full outline-none text-sm text-gray-800 placeholder-gray-400"
    />
  </div>

  {/* ================= CATEGORY ================= */}
  <div className="flex gap-2 mb-6">
    {["All", "Coffee", "Tea", "Snack"].map((cat) => (
      <button
        key={cat}
        onClick={() => setCategory(cat)}
       className={`px-4 py-1 rounded-full border text-sm transition ${
          category === cat
            ? "bg-green-800 text-white"
            : "bg-white text-gray-400 hover:bg-gray-100"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* ================= MAIN GRID ================= */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* ================= LEFT MENU ================= */}
      {/* ================= LEFT MENU ================= */}
  <div className="lg:col-span-2">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {filteredMenu.map((item) => (
        <div
          key={item.id}
          className={`bg-white rounded-2xl shadow overflow-hidden p-3 transition duration-200
          ${
            clickedId === item.id
              ? "scale-105 ring-2 ring-green-500"
              : "hover:shadow-xl hover:-translate-y-1"
          }`}
        >

          {/* IMAGE */}
          <div className="bg-[#f5f5f5] rounded-lg mb-3 relative overflow-hidden">

            {/* BADGE */}
            {getQty(item.id) > 0 && (
              <div className="absolute top-1 right-1 bg-green-800 text-white text-xs px-2 py-0.5 rounded-full z-10">
                {getQty(item.id)}
              </div>
            )}

            <img
              src={item.image}
              className="w-full h-32 object-cover transition duration-200 hover:scale-105"
            />
          </div>

          {/* TEXT */}
          <h2 className="font-semibold text-[#6f4e37] text-sm">
            {item.name}
          </h2>

          <p className="text-gray-600 text-xs mb-2">
            {formatRupiah(item.price)}
          </p>

          {/* BUTTON */}
          <button
            onClick={() => {
              addToCart(item);
              setClickedId(item.id);

              setTimeout(() => setClickedId(null), 200);
            }}
            className={`mt-2 w-full py-1 rounded-lg text-sm border flex items-center justify-center transition transform
            ${
              clickedId === item.id
                ? "scale-110 bg-green-700 text-white"
                : "hover:bg-green-700 hover:text-white"
            }`}
          >
            Add
          </button>
          </div>
        ))}
      </div>

    </div>


    {/* ================= RIGHT CART ================= */}
    <div className="bg-white p-5 rounded-2xl shadow h-fit sticky top-6">
    <div className="bg-[#f5f5f5] p-4 rounded-2xl shadow-lg">

  {/* HEADER */}
  <div className="flex items-center justify-between mb-4">
    <button className="w-10 h-10 bg-green-800 text-white rounded-full">
      →
    </button>

    <div className="text-center">
      <p className="text-sm font-semibold text-black">Purchase Receipt</p>
      <p className="text-xs text-gray-500">#000001</p>
    </div>

      <button className="w-10 h-10 border rounded-full hover:bg-gray-100 transition">
        ≡
      </button>
    </div>

  {/* ORDER TYPE */}
  <div className="flex bg-gray-200 rounded-full p-1 mb-4">
    {["Dine In", "Take Away", "Order Online"].map((type) => (
      <button
        key={type}
        onClick={() => setOrderType(type)}
        className={`flex-1 text-sm py-1 rounded-full transition ${
          orderType === type
            ? "bg-green-800 text-white"
            : "text-gray-600"
        }`}
      >
        {type}
      </button>
    ))}
  </div>

  {/* CUSTOMER */}
  <div className="mb-4">
    <p className="text-xs text-gray-500 mb-1">Customer name</p>

    <div className="flex gap-2">
      <input
        className="flex-1 border rounded-full px-3 py-1 text-sm text-gray-500"
        placeholder="Wills"
      />

      <select className="border rounded-full px-3 py-1 text-sm text-gray-400">
        <option>T1 - Indoor</option>
        <option>T5 - Outdoor</option>
      </select>
    </div>
  </div>

  {/* ORDER LIST */}
  <div className="bg-white rounded-xl p-3 mb-4 max-h-64 overflow-y-auto space-y-3">

      {cart.map((item) => (
        <div
          key={item.id}
          className={`flex gap-3 p-2 rounded-lg transition ${
            clickedId === item.id
              ? "bg-green-50 scale-[1.02]"
              : "hover:bg-gray-50"
          }`}
        >
          {/* IMAGE */}
        <img
          src={item.image}
          className="w-12 h-12 rounded-lg object-cover"
        />
          {/* INFO */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-black">{item.name}</p>
          <p className="text-xs text-gray-800">
            {formatRupiah(item.price)}
          </p>

          {/* NOTE INPUT */}
          <input
              type="text"
              placeholder="Note..."
              value={item.note || ""}
              onChange={(e) =>
                updateNote(item.id, e.target.value)
              }
              className="mt-1 w-full text-xs border rounded px-1 py-1 text-gray-300"
            />
          </div>

        {/* QTY */}
        <div className="flex flex-col items-center gap-1">

            <button
              onClick={() => increaseQty(item.id)}
              className="w-6 h-6 border rounded hover:bg-gray-200 active:scale-90 transition text-gray-300"
            >
              +
            </button>

            <span className="text-sm text-gray-800">
              {item.qty}
            </span>

            <button
              onClick={() => decreaseQty(item.id)}
              className="w-6 h-6 border rounded hover:bg-gray-200 active:scale-90 transition text-gray-300"
            >
              -
            </button>
          </div>

        {/* TOTAL */}
        <div className="text-sm font-semibold text-gray-600">
          {formatRupiah(item.qty * item.price)}
        </div>
      </div>
    ))}
  </div>

  {/* PAYMENT */}
  <div className="text-sm mb-4">
    <div className="flex justify-between">
      <span>Subtotal</span>
      <span>{formatRupiah(total)}</span>
    </div>

    <div className="flex justify-between text-gray-500">
      <span>Tax</span>
      <span>{formatRupiah(total * 0.1)}</span>
    </div>

    <div className="flex justify-between font-bold text-black mt-2">
      <span>Total</span>
      <span>{formatRupiah(total * 1.1)}</span>
    </div>
  </div>

  {/* BUTTON */}
  <button className="w-full bg-green-800 text-white py-3 rounded-full flex justify-between items-center px-4">
    <span>Place Order</span>
    <span>{formatRupiah(total)}</span>
  </button>

  </div>
    </div>
  </div>
  </div>
  )}

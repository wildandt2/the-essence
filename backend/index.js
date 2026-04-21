const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// ================= LOGIN =================
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Email / Password salah" });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ error: "Login gagal" });
  }
});

// ================= CREATE ORDER =================
app.post("/api/orders", async (req, res) => {
  try {
    const { items, total } = req.body;

    const order = await prisma.order.create({
      data: {
        userId: 1,
        total,
        status: "PAID",
        items: {
          create: items.map((item) => ({
            menuId: item.id,
            quantity: item.qty,
          })),
        },
      },
    });

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal simpan order" });
  }
});

// ================= GET ORDERS =================
app.get("/api/orders", async (req, res) => {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        include: {
          menu: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  res.json(orders);
});

// ================= START =================
app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
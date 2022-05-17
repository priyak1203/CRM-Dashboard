// ================== Top Customers Info =========== /
export const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "Amy Smith",
      order: "490",
      price: "$15,870",
    },
    {
      username: "Carl Jackson",
      order: "250",
      price: "$12,251",
    },
    {
      username: "Steve Marsh",
      order: "120",
      price: "$10,840",
    },
    {
      username: "Alex Jason",
      order: "110",
      price: "$9,251",
    },
    {
      username: "Zoe Butler",
      order: "80",
      price: "$8,840",
    },
  ],
};

// ================== Latest Orders Info =========== /
export const latestOrders = {
  header: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "Amy Smith",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "Carl Jackson",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "Steve Marsh",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD1712",
      user: "Alex Jason",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "Steve Marsh",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};

// ================== Order Status Labels =========== /
export const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

import { useSelector } from "react-redux";
import MobileOrderItem from "./MobileOrderItem";
// import ProductsItem from "../ProductItem";
import OrderItem from "./OrderItem";

const orders = [
  {
    id: 1,
    title: "Product 1",
    category: "Category 1",
    price: 1000,
    quantity: 1,
    totalPrice: 1000,
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    customerName: "Joel",
    customerEmail: "ojerinde@gmail.com",
    customerPhone: "08143368703",
  },
  {
    id: 2,
    title: "Product 2",
    category: "Category 2",
    price: 2000,
    quantity: 2,
    totalPrice: 4000,
    paymentStatus: "Pending",
    orderStatus: "Pending",
    customerName: "Joel",
    customerEmail: "ojerinde@gmail.com",
    customerPhone: "08143368703",
  },
  {
    id: 3,
    title: "Product 3",
    category: "Category 3",
    price: 3000,
    quantity: 3,
    totalPrice: 9000,
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    customerName: "Joel",
    customerEmail: "ojerinde@gmail.com",
    customerPhone: "08143368703",
  },
];

import classes from "./Orders.module.css";
const Orders = () => {
  //   const { orders } = useSelector((state) => state.products);
  return (
    <>
      <div className={`${classes.desktop}`}>
        <table className={`${classes.table}`}>
          <thead>
            <tr className={classes.tr}>
              <th className={classes.th}>Customer</th>
              <th className={classes.th}>Category</th>
              <th className={classes.th}>Product Name</th>
              <th className={classes.th}>Quantity</th>
              <th className={classes.th}>Unit Price</th>
              <th className={classes.th}>Total Price</th>
              <th className={classes.th}>Payment Status</th>
              <th className={classes.th}>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderItem
                key={order.id}
                id={order.id}
                title={order.title}
                category={order.category}
                price={order.price}
                totalPrice={order.totalPrice}
                quantity={order.quantity}
                paymentStatus={order.paymentStatus}
                orderStatus={order.orderStatus}
                customerName={order.customerName}
                customerEmail={order.customerEmail}
                customerPhone={order.customerPhone}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile view */}
      <ul className={`${classes.mobile}`}>
        <div className="col-12">
          <div className="section-wrapper">
            <div className="row justify-content-center mb-15-none">
              {orders.map((order) => (
                <MobileOrderItem
                  key={order.id}
                  id={order.id}
                  title={order.title}
                  category={order.category}
                  price={order.price}
                  totalPrice={order.totalPrice}
                  quantity={order.quantity}
                  paymentStatus={order.paymentStatus}
                  orderStatus={order.orderStatus}
                  customerName={order.customerName}
                  customerEmail={order.customerEmail}
                  customerPhone={order.customerPhone}
                />
              ))}
            </div>
          </div>
        </div>
      </ul>
    </>
  );
};
export default Orders;

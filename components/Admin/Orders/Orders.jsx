import { useSelector } from "react-redux";
import MobileOrderItem from "./MobileOrderItem";
import OrderItem from "./OrderItem";
import OrdersSearch from "./Search/OrdersSearch";

import classes from "./Orders.module.css";
import Pagination from "../../Pagination/Pagination";
import { useState } from "react";
const Orders = () => {
  const { orders, filteredOrders, noOrder } = useSelector(
    (state) => state.products
  );
  const ordersArr = filteredOrders.length > 0 ? filteredOrders : orders;
  console.log(filteredOrders);
  const [start, setStart] = useState(0);
  const ORDERS_PER_PAGE = 2;
  const end = start + ORDERS_PER_PAGE;
  const getPageHandler = (page) => {
    setStart((pag) => page * ORDERS_PER_PAGE - ORDERS_PER_PAGE);
  };
  return (
    <>
      <h3 className={classes.h3}>All Orders</h3>
      <div>
        <OrdersSearch />
      </div>
      <div className={`${classes.desktop}`}>
        {!noOrder ? (
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
              {ordersArr?.slice(start, end).map((order) => (
                <OrderItem
                  key={order.id}
                  id={order.id}
                  title={order.title}
                  category={order.type}
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
        ) : (
          <p className={classes.no_order}>
            No order matched your filtered parameters
          </p>
        )}
      </div>
      {/* Mobile view */}
      <ul className={`${classes.mobile}`}>
        {!noOrder ? (
          <div className="col-12">
            <div className="section-wrapper">
              <div className="row justify-content-center mb-15-none">
                {ordersArr?.slice(start, end).map((order) => (
                  <MobileOrderItem
                    key={order.id}
                    id={order.id}
                    title={order.title}
                    category={order.type}
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
        ) : (
          <p className={classes.no_order}>
            No order matched your filtered parameters
          </p>
        )}
      </ul>
      {!noOrder && ordersArr.length > 0 && (
        <Pagination
          totalProducts={ordersArr.length}
          productsPerPage={ORDERS_PER_PAGE}
          onChange={getPageHandler}
        />
      )}
    </>
  );
};
export default Orders;

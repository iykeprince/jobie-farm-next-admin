import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { products, transactions, orders, users } = useSelector(
    (state) => state.products
  );
  const fetchedDatas = [
    { title: "Available Products", total: products.length, link: "/products" },
    {
      title: "All transactions",
      total: transactions.length,
      link: "/transactions",
    },
    { title: "All Orders", total: orders.length, link: "/orders" },
    { title: "All Users", total: users.length, link: "/customers" },
  ];
  return (
    <ul className="admin__list">
      {fetchedDatas.map((dat, index) => (
        <MenuItem
          key={index}
          topic={dat.title}
          total={dat.total}
          link={dat.link}
        />
      ))}
    </ul>
  );
};
export default Menu;

import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { products, transactions } = useSelector((state) => state.products);
  const DummyDatas = [
    { title: "Available Products", total: products.length, link: "/products" },
    {
      title: "All transactions",
      total: transactions.length,
      link: "/transactions",
    },
    { title: "All Orders", total: 0, link: "/orders" },
  ];
  return (
    <ul className="admin__list">
      {DummyDatas.map((dat, index) => (
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

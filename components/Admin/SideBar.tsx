import Link from "next/link";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <Link href="/" className="side-nav__link">
            {/* Icon */}
            <span>Home</span>
          </Link>
        </li>

        <li className="side-nav__item">
          <Link href="/products" className="side-nav__link">
            <span>Products</span>
          </Link>
        </li>

        <li className="side-nav__item">
          <Link href="/orders" className="side-nav__link">
            <span>Orders</span>
          </Link>
        </li>

        <li className="side-nav__item">
          <Link href="/transactions" className="side-nav__link">
            <span>Transactions</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link href="/customers" className="side-nav__link">
            <span>Customers</span>
          </Link>
        </li>
      </ul>

      <div className="legal text-center">
        &copy; 2022 <a href="index.html">JobieAgro Farm</a>.All Rights Reserved
        By{" "}
        <Link href="https://edsolution.co.uk" target="_blank">
          Ed Solution
        </Link>
      </div>
    </nav>
  );
};
export default SideBar;

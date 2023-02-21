import Link from "next/link";

const MenuItem = ({ topic, total, link }) => {
  return (
    <li className="admin__menu">
      <h3 className="admin__title">
        {topic} : <span className="admin__total">{total}</span>
      </h3>
      <Link href={link} className="admin__link">
        See more
      </Link>
    </li>
  );
};
export default MenuItem;

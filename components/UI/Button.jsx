import Link from "next/link";
import classes from "../../styles/Button.module.css";
const Button = ({ disabled, link, to, className, onClick, children }) => {
  if (link)
    return (
      <Link href={to} className={` ${className} `}>
        <span>{children}</span>
      </Link>
    );
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` ${className} ${classes.button}`}
    >
      {children}
    </button>
  );
};
export default Button;

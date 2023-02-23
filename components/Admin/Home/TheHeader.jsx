import Image from "next/image";

const TheHeader = () => {
  return (
    <header className="dashboard__header">
      <Image
        src="/assets/jobie-agro-logo.png"
        alt="logo"
        width={200}
        height={50}
      />
      <h3 className="dashboard__title">Dashboard</h3>
      <div className="dashboard__images">
        <Image
          src="/assets/jobie-agro-logo.png"
          alt="logo"
          width={30}
          height={30}
        />
        <p className="dashboard__email">jobiefarm@gmail.com</p>
      </div>
    </header>
  );
};
export default TheHeader;

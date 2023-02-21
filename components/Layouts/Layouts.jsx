import SideBar from "../Admin/SideBar";
import TheHeader from "../Admin/Home/TheHeader";

const Layouts = ({ children }) => {
  return (
    <main>
      <TheHeader />
      <div className="content">
        <SideBar />
        <div className="content__main">{children}</div>
      </div>
    </main>
  );
};
export default Layouts;

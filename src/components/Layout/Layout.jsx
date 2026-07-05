import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./Layout.css";

function Layout({ children }) {
  return (

    <div className="layout">

      <Sidebar />

      <div className="main">

        <Header />

        <div className="content">

          {children}

        </div>

      </div>

    </div>

  );
}

export default Layout;
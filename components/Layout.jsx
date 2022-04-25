import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Shop IT</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;

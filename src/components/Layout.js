import Navbar from "./Navbar";
// import Footer from './Login';
import Login from "./Login";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      /> */}
      <main>{children}</main>

      <Footer />
    </>
  );
}

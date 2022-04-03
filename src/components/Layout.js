import Navbar from './Navbar';
import Login from './Login';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <main>{children}</main>

      <Footer />
    </>
  );
}

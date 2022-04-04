import Navbar from './Navbar';
import Sidebar from './Sidebar';
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
      <Sidebar/>
        <main>{children}</main>
      <Footer />
    </>
  );
}
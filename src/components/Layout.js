import Navbar from './Navbar';
// import Footer from './Login';
import Login from './Login';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      /> */}
        <main>{children}</main>
        <Login>
        <form className='loginform'>
             <div class="mb-3">
                 <label htmlFor="email" class="form-label">User name</label>
                 <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required autoComplete='off' placeholder='Enter username ' />

             </div>
             <div class="mb-3">
                 <label htmlFor="password" class="form-label">Password</label>
                 <input type="password" class="form-control" id="password" required placeholder='Enter your password' />
             </div>

             <button type="submit" class="btn ">Login</button>
         </form>

        </Login>
      <Footer />
    </>
  );
}
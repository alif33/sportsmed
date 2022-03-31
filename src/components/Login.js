// import React from 'react';

// const Login = () => {
//     return (
//         <div>
//             <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div class="modal-dialog ">
//                     <div class="modal-content bg-black text-white py-3 px-4">
//                         <div class="modal-header border-0">
//                             <h5 class="modal-title" id="exampleModalLabel">Login </h5>
//                             <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body ">
//                             <form className='loginform'>
//                                 <div class="mb-3">
//                                     <label htmlFor="email" class="form-label">User name</label>
//                                     <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required autoComplete='off' placeholder='Enter username ' />

//                                 </div>
//                                 <div class="mb-3">
//                                     <label htmlFor="password" class="form-label">Password</label>
//                                     <input type="password" class="form-control" id="password" required placeholder='Enter your password' />
//                                 </div>

//                                 <button type="submit" class="btn ">Login</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Login;




import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const Login = ({ children }) => {



  // const [modal, setModal] = useState(false);

  const toggle = () => setModal(true);

  return (
    <>
      <Modal isOpen={true} toggle={true}>
        <ModalHeader toggle={true}></ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </>
  );
};

export default Login;
import React from 'react'

const Signup = () => {
    return (
        <div>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content bg-black text-white py-3 px-4">
                        <div class="modal-header border-0">
                            <h5 class="modal-title" id="exampleModal1Label">Sign Up </h5>
                            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body ">
                            <form className='loginform'>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required autoComplete='off' placeholder='Enter username ' />

                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" required placeholder='Enter your password' />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Confirm  Password</label>
                                    <input type="password" class="form-control" id="password" required placeholder='Retype your password' />
                                </div>

                                <button type="submit" class="btn ">Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
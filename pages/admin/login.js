import Head from 'next/head';
import Image from 'next/image';


export default function Login() {
  return (
    <div className="container-50 mt-5">
        <form 
            className="pt-3"
            onSubmit={handleSubmit(onSubmit, onError)}  
        >
            <div className="form-outline">
                <label className="form-label" for="form2Example1">Email address</label>
                <input
                    {...register("email",
                        {
                            required: 'Email is required.'
                        }
                    )}   
                    type="email" 
                    id="form2Example1" 
                    className="form-control" 
                />
            </div>
            <div className="form-outline pt-1">
                <label className="form-label" for="form2Example2">Password</label>
                <input
                    {...register("password",
                        {
                            required: 'Password is required.'
                        }
                    )}  
                    type="password" 
                    id="form2Example2" 
                    className="form-control" 
                />
            </div>
            <div className="col text-center">
                <button type="button" className="btn btn-primary btn-block mt-2">Sign in</button>
            </div>
        </form>
    </div>
  )
}

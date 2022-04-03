import React, { useState } from 'react';
import Layout from '../src/components/Layout';
import { useForm } from 'react-hook-form';
import { showErr } from '../__lib__/helpers/ErrHandler';
import { postData } from '../__lib__/helpers/HttpService';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const Signup = () => {

    const [ disable, setDisable ] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onError = err => showErr(err);
    const router = useRouter();

    const onSubmit = data => {
        setDisable(true)
        postData('/users/register', data, setDisable)
        .then(res=>{
            if(res?.success)
            {  
                toast.success(`${res.message}`);
                reset();
                router.push({
                    pathname: '/login'
                })
            }
        })
    }

  return (
    <>
      <Layout>
        <div id="login">
          <form
                onSubmit={handleSubmit(onSubmit, onError)} 
          >
            <h1 className="text-center text-white fs-1 mt-2">Signup</h1>
            <div>
              <label htmlFor="name">Name</label>
              <input
                {...register("name",
                    {
                        required: 'Name is required.'
                    }
                )} 
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email",
                    {
                        required: 'Email is required.'
                    }
                )}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                {...register("password",
                    {
                        required: 'Password is required.'
                    }
                )}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your password"
              />
            </div>
            <button 
              disabled={disable}
              className="my-2"
            >signup</button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Signup;

import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import { useForm } from 'react-hook-form';
import { showErr } from '../__lib__/helpers/ErrHandler';
import { postData } from '../__lib__/helpers/HttpService';
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

const login = () => {

  const [ disable, setDisable ] = useState(false);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onError = err => showErr(err);
  const cookies = new Cookies();
  const router = useRouter();

  const onSubmit = data => {
      setDisable(true)
      postData('/users/login', data, setDisable)
      .then(res=>{
          if(res?.success)
          {  
              cookies.set("_info", JSON.stringify({
                  token: res.token,
                  user: res.user
              }), { path: '/' });
              reset();
              router.push({
                  pathname: '/'
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
            <h1 className="text-center text-white fs-1 mt-2">Login</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your password"
              />
            </div>
            <button className="my-2">Login</button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default login;

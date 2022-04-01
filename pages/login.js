import React from "react";
import Layout from "./../src/components/Layout";

const login = () => {
  return (
    <>
      <Layout>
        <div id="login">
          <form>
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

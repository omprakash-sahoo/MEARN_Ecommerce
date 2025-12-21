import React, { useState } from "react";
import { Link } from "react-router";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome</h2>
          <p className="text-sm mb-3 font-medium">
            {" "}
            Please Login to your Account
          </p>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                required
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                onChange={inputHandle}
                value={state.email}
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                onChange={inputHandle}
                value={state.password}
              />
            </div>

            <button className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              Sign Up
            </button>
            <div>
              <p>
                Don't Have an account ?{" "}
                <Link className="font-bold" to={"/register"}>
                  Sig Up
                </Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center gap-3">
              <div className="flex h-[1px] bg-slate-700 w-[45%]"></div>
              <div className="pb-1 w-[10%] flex justify-center items-center">
                or
              </div>
              <div className="flex h-[1px] bg-slate-700 w-[45%]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center overflow-hidden bg-orange-700 w-[135px] h-[35px] rounded-md hover:shadow-orange-700/50 shadow-lg ">
                <FaGoogle />
              </div>
              <div className="flex justify-center items-center overflow-hidden bg-blue-700 w-[135px] h-[35px] rounded-md hover:shadow-blue-700/50 shadow-lg ">
                <FaFacebook />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

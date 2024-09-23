import React, { useState } from "react";

const Login = () => {
  const [currstate, setcurrstate] = useState("Sign Up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500"
    >
      <div className="inline-flex items-center gap-5 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currstate}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currstate === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-89x] ">
        <p className="cursor-pointer">Forgot Your Password</p>
        {currstate === "Login" ? (
          <p className="cursor-pointer" onClick={() => setcurrstate("Sign Up")}>
            create account
          </p>
        ) : (
          <p className="cursor-pointer" onClick={() => setcurrstate("Login")}>
            Login here
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4 "
      >
        {currstate === "Login" ? "Sign in" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;

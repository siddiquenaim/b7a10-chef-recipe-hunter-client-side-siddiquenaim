import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { logInUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-5">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-custom">Login</button>
            </div>
          </form>
          <div className="flex justify-center items-center flex-col gap-2">
            <div>
              <button
                style={{ width: "240px" }}
                className="btn btn-outline btn-primary normal-case"
                onClick={handleGoogleSignIn}
              >
                <FaGoogle /> <span className="ml-2">Login with Google</span>
              </button>
            </div>
            <div>
              <button
                style={{ width: "240px" }}
                className="btn btn-outline normal-case"
              >
                <FaGithub /> <span className="ml-2">Login with GitHub</span>
              </button>
            </div>
          </div>
          <div className="mt-4 mb-8">
            <p className="text-center text-red-600 w-[75%] mx-auto">
              {error ? error : ""}
            </p>
            <p className=" text-center">
              New to this website?{" "}
              <Link to="/register" className="text-blue-600">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {

    event.preventDefault()

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    createUser(email, password)
      .then((result) => {
        const registeredUser = result.user;
        console.log(registeredUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
    
    form.reset();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Register !</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
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
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <Link
              to="/login"
              className="label-text-alt link link-hover mt-5 ml-1"
            >
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

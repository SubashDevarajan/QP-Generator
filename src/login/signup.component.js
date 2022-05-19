import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    console.log(data.name, data.email, data.password);

    const a = await axios
      .post("http://localhost:5000/api/user", data)
      .then((res) => {
        console.log(res);
        window.location.href = "/";
      })
      .catch((e) => console.log(e.response));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => submit()}
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

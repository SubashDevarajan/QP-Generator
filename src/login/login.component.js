import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errormsg, seterrormsg] = useState("");

  const submit = async (e) => {
    // e.preventDefault();
    console.log(data.email, data.password);
    const a = await axios
      .post("http://localhost:5000/api/auth/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("AuthId", res.data.accesstoken.accessToken);
        localStorage.setItem("RefId", res.data.accesstoken.refreshToken);
        localStorage.setItem("UserId", res.data.userid);
        window.location.href = "/main";
      })
      .catch((e) => {
        // alert(e.response.data.error);
        seterrormsg(e.response.data.error);
        setError(true);
        console.log(e.response);
        // window.location.href = "/sign-up";
      });
  };

  return (
    <>
      <div className="App">
        <div className="auth-wrapper body">
          <div className="auth-inner">
            <form onSubmit={(e) => e.preventDefault()}>
              <h3>Sign In</h3>

              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>

              {error && (
                <div className="mb-3">
                  <div>
                    <label
                      style={{ color: "red" }}
                      className="custom-control-label"
                    >
                      {errormsg}
                    </label>
                  </div>
                </div>
              )}

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => submit()}
                >
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right">
                <a href="/sign-up">No Account?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

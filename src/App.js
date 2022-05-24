// import "./App.css";
import Footer from "./components/footer";
import QPInputPanel from "./components/qpInputPanel";
import ResponsiveAppBar from "./components/navbar";
import { DataProvider } from "./components/dataProvider";
import background from "./images/bg-question.webp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./login/login.component";
import SignUp from "./login/signup.component";
import Main from "./login/Main";
import QPMain from "./components/Main";
import Dashboard from "./dashboard/Dashboard";
import Progress from "./components/progressBar";
import axios from "axios";
import { useEffect } from "react";
import Admin from "./admin/admin";
import MyEditor from "./components/RichText";

function App() {
  const token = localStorage.getItem("AuthId");
  const refId = localStorage.getItem("RefId");
  const role = localStorage.getItem("UserId");

  const refresh = async () => {
    const a = await axios
      .get("http://localhost:5000/api/auth/refresh_token", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("RefId")}`,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("AuthId", res.data.accessToken);
        // setItemOnLocalStorage('RefId', res.data.refreshToken);
        // setItemOnLocalStorage('Role', res.data.user.role);
        console.log(localStorage.getItem("AuthId"));
      });
  };

  useEffect(() => {
    setInterval(refresh, 10 * 1000);
  }, []);

  return (
    <>
      {/* <Progress /> */}
      {/* <MyEditor /> */}
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/input-form" element={<QPMain />} />
            <Route path="/sign-up" element={<SignUp />} />
            {role === "1" ? (
              <>
                <Route path="/main" element={<Admin />} />
              </>
            ) : (
              <>
                <Route path="/main" element={<Dashboard />} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

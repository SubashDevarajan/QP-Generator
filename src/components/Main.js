import React, { useEffect } from "react";
import Footer from "./footer";
import QPInputPanel from "./qpInputPanel";
import ResponsiveAppBar from "./navbar";
import { DataProvider } from "./dataProvider";
import background from "../images/bg-question.webp";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Main() {
  useEffect(() => {
    const token = localStorage.getItem("AuthId");
    console.log(token);
    if (token == null) {
      window.location.href = "/";
    }
  });
  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <DataProvider>
          <ResponsiveAppBar></ResponsiveAppBar>
          <div>
            <QPInputPanel />
          </div>
          <div class="fixed-bottom">
            <Footer />
          </div>
        </DataProvider>
      </div>
    </>
  );
}

export default Main;

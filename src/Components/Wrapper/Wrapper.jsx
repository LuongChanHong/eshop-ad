import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import "../../App.css";
import "./wrapper.css";

const Wrapper = (props) => {
  return (
    <section className="wrapper__container">
      <section className="wrapper__warpper container">
        <div className="row">
          <div className="col-12">
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-2 p-0 sidebar">
            <Sidebar />
          </div>
          <div className="col-10 p-0 content">{props.children}</div>
        </div>
      </section>
    </section>
  );
};

export default Wrapper;

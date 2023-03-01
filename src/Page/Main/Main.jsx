import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "../../Components/Sidebar/Sidebar";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signOutAction } from "../../Redux/Actions/userAction";

const Main = () => {
  const userId = useSelector((state) => state.user.userId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userId);
    if (userId === "") {
      navigate("/login");
    }
  }, []);

  return (
    <section>
      <Sidebar />
      <h1>MAIN PAGE</h1>
    </section>
  );
};

export default Main;

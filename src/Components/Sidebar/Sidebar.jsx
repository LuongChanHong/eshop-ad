import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signOutAction } from "../../Redux/Actions/userAction";

import "../../App.css";
import "./sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutAction(dispatch);
    navigate("/login");
  };

  return (
    <section className="sidebar__container d-flex justify-content-center">
      <section className="sidebar__wrapper mt-5">
        <ul className="p-0">
          <li>
            <a href="">InfoBoard</a>
          </li>
          <li>
            <a href="">Orders</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
        </ul>
        <button onClick={handleLogout} className="btn sidebar__button">
          Logout
        </button>
      </section>
    </section>
  );
};

export default Sidebar;

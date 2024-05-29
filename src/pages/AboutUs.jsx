import React from "react";
import NavBar from "../components/NavBar";
import Programmer from "../components/Programmer";
import { Outlet, Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <NavBar />
      <h1>AboutUs</h1>
      <ul>
        <li>
          <Link to="programmer">Programmer</Link>
        </li>
        <li>
          <Link to="user">User</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUs;

import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside>
      <h3>WPR</h3>
      <header>
        <h2>HTML Quiz</h2>
      </header>

      <ul>
        <li>
          <NavLink to="/">
            <i className="far fa-question-circle"></i>
            All questions
          </NavLink>
        </li>
        <li>
          <NavLink to="/add">
            <i className="far fa-plus"></i>
            New question
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
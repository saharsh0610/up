import React from "react";
import "./Header.css";
import { links } from "../../Data";
import logo from "../../assets/logo.svg";
import dropdown from "../../assets/dropdown.svg";
import search from "../../assets/search.svg";

function Header() {
  return (
    <header class="header">
      <div class="header_wrapper wrapper">
        <div class="header_left">
          <img src={logo} alt="" />
          <ul class="header_left_list">
            {links.map(({ name, key }) => {
              return <li class="header_left_list_item">{name}</li>;
            })}
          </ul>
        </div>
        <div class="header_right">
          <div class="header_right_form">
            <input type="search" placeholder="Search" name="search" id="" />
            <div class="header_right_form_input_icons">
              <img src={search} alt="" />
              <img src={dropdown} alt="" />
            </div>
          </div>
          <div class="header_right_btns">
            <button class="btn_primary">Log In</button>
            <button class="btn_secondary">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

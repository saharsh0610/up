import React from "react";
import "./Section1.css";
import { s1links } from "../../Data";
import dropdown from "../../assets/dropdown.svg";
import image1 from "../../assets/image-1.jpg";
import ms from "../../assets/microsoft.svg";
import bnb from "../../assets/airbnb.svg";
import gd from "../../assets/godaddy-black.svg";
import bis from "../../assets/bissell.svg";

function Section1() {
  return (
    <section class="section_1 wrapper">
      <div class="sectin_1_bottom">
        <div class="section_1_bottom_left">
          <h1 class="title-1">
            How work
            <br />
            should work
          </h1>
          <h3 class="title-3">
            Forget the old rules. You can have the best people.
            <br />
            Right now. Right here.
          </h3>
          <div class="section_1_bottom_left_btns">
            <button class="btn_secondary">Find Talent</button>
            <button class="btn_secondary_outline">Find Work</button>
          </div>
          <div class="section_1_bottom_left_companies_logo">
            <h4 class="title-4">Trusted by</h4>
            <div>
              <img src={ms} alt="" />
              <img src={bnb} alt="" />
              <img src={gd} alt="" />
              <img src={bis} alt="" />
            </div>
          </div>
        </div>
        <div class="section_1_bottom_right">
          <img src={image1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section1;

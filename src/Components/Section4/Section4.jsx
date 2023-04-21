import React from "react";
import "./Section4.css";
import talent from "../../assets/find-talent.webp"
import { s4links } from "../../Data";
import ra from "../../assets/right-arrow.svg";

const Section4 = () => {
  return (
    <section class="section_4 wrapper">
      <div class="section_4_background_img">
        <img src={talent} alt="find_talent" />
      </div>
      <div class="section_4_body">
        <div class="section_4_body_row_1">
          <h4>For Clients</h4>
          <h1>
            Find talent <br />
            your way
          </h1>
        </div>

        <div class="section_4_body_row_2">
          <h5>
            Work with the largest network of independent
            <br />
            professionals and get things done—from quick <br />
            turnarounds to big transformations.
          </h5>
        </div>
        <div class="section_4_body_row_4">
          {s4links.map(({ name, breaking, sup }) => {
            return (
              <>
                <div class="section_4_body_row_4_card">
                  <button>
                    <span>
                      {name} <br />
                      {breaking}
                    </span>
                    <span>
                      {sup}
                      <sup>TM</sup>
                      <img src={ra} alt="right-arrow" />
                    </span>
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section4;

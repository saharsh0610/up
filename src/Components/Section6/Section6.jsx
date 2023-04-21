import React from 'react'
import "./Section6.css"
import fgw from "../../assets/find-great-work.jpg" 
const Section6 = () => {
  return (
    <section class="section_6 wrapper">
      <div class="section_6_left">
        <img src={fgw} alt="" />
      </div>
      <div class="section_6_right">
        <div class="section_6_right_top">
          <h3>For talent</h3>
          <h1>
            Find great<br />
            work
          </h1>
          <p>
            Meet clients you’re excited to work with and take <br />your career
            or business to new heights.
          </p>
        </div>
        <hr />
        <div class="section_6_right_middle">
          <p id="text-1">
            Find opportunities<br />
            for every stage of<br />
            your freelance<br />
            career
          </p>

          <p>
            Control when,<br />
            where, and how <br />you work
          </p>

          <p>
            Explore different<br />
            ways to earn
          </p>
        </div>
        <div class="section_6_right_bottom">
          <button class="btn_primary">Find Opportunities</button>
        </div>
      </div>
    </section>
  )
}

export default Section6
import React from "react";
import "./Section8.css";
const Skill = ({ skillData }) => {
  return (
    <>
      {skillData.map((curElem) => {
        const { skillLeft, skillRight } = curElem;

        return (
          <>
            <div class="section_8_middle">{skillLeft}</div>
            <div class="section_8_right">{skillRight}</div>
          </>
        );
      })}
    </>
  );
};

export default Skill;

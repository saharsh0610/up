import React, { useEffect, useState } from "react";
import "./Section8.css";
import { Skills } from "../../Data";
import Skill from "./Skill";
import List from "./List";

const uniqueList = [
  ...new Set(
    Skills.map((curElem) => {
      return curElem.category;
    })
  ),
];

function Section8() {
  const [skillData, setSkillData] = useState([]);
  const [skillList, setSkillList] = useState(uniqueList);

  const filterItem = (category) => {
    const updatedList = Skills.filter((curElem) => {
      return curElem.category === category;
    });
    setSkillData(updatedList);
  };
   useEffect(()=>{
    filterItem(skillList[0])
   },[])
  return (
    <>
      <List filterItem={filterItem} skillList={skillList} skillData={skillData} />
      <Skill skillData={skillData} />
    </>
  );
}


export default Section8;

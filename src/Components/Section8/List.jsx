import React, {useEffect, useState} from "react";
import "./Section8.css"

const List = ({filterItem, skillList,skillData}) => {
    useEffect(()=>{
        console.log("skilllist",skillData)
        console.log(skillList)
    },[skillData])
  return (
    <section class="section_8 wrapper">
       <div class="section_8_left">
         {skillList.map((curElem) => {
           return <a className={curElem==skillData[0]?.category?'active':'not_active'} onClick={(e) =>{
            e.preventDefault()
            return filterItem(curElem)
           } }>{curElem}</a>;
         })}
       </div>
    </section>
  );
}

export default List
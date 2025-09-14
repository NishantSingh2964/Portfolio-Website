import React from "react";
import "./Education.css";
import { RiGraduationCapFill } from "react-icons/ri"
import { BsSuitcaseLgFill } from "react-icons/bs"

const education = [
  {
    id:1,
    field:"B-tech(CSE)",
    institute:"AIET, Jaipur",
    date: "2022-2026"
  },
  {
    id:2,
    field:"12th",
    institute:'GDM public school',
    date:"2019-2021"

  },
  {
    id:3,
    field: "10th",
    institute: 'Dav public school',
    date: "2018-2019"
  },
]

const experience = [
  {
    id:1,
    field:"Front-End Dev Intern",
    institute:"learn and build",
    date: "2024"
  },
  {
    id:2,
    field:"Front-End Dev Intern",
    institute:'eklvya.me',
    date:"2025"

  },
  {
    id:3,
    field: "Web developer Intern",
    institute: 'Tamizan Skills',
    date: "2025"
  },
]


export default function Education() {

  const Card = (props)=>{
    return(
      <div className="card design"> 
        <div className="flex gap-3 border-bottom pb-4">
           <div className="icon-container green-inverse">
              {props.icon}
           </div>
           <h3>{props.title}</h3>
        </div>

        <div className="mt-4">
          {props.item.map((education, id)=>{
            return(
              <div key={id} className="flex between mt-8">
                <div>
                  <span className="sub-text">{education.field}</span>
                  <p>{education.institute}</p>
                </div>

                <div className="list">
                  {education.date}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="wrapper py-36 border-bottom ">
        <div className=" text-center">
          <div className="middle" data-type="Education & work">
            <span className="sub-text">Education & work</span>
            <h2>
              My <span className="green-text">Academic & <br /> Professional</span>{" "}
              Journey
            </h2>
          </div>
        </div>

         <div className="mt-20 flex gap-20">
            <Card item={education} title='Education' icon={<RiGraduationCapFill/>}/>
            <Card item={experience} title='Experience' icon={<BsSuitcaseLgFill/>}/>
         </div>

      </section>
    </div>
  );
}

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillStar } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";
import { RiSuitcaseFill } from "react-icons/ri";
import { useColorModeValue } from "@chakra-ui/react";

function Timeline() {
  return (
    <>
      <VerticalTimeline lineColor={useColorModeValue("Black", "white")}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022,Jan - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<RiSuitcaseFill />}
        >
          <h3 className="vertical-timeline-element-title">
            Java Full Stack Developer/Mean Stack
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Gurgoan,Delhi</h4>
          <p>
            Creative Design, User Experience, Backend, Creating API's,
            Internship
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: useColorModeValue("white", "grey") }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology in Computer Science Engineering ,Lovely
            Professional University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>
            Specilization in cybersecurity,Learned Data
            Structures,Java,C++,C,Pythin,Netwerking,Operating Systems and much
            more
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: useColorModeValue("white", "grey") }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Spring Dale School,Bhedu Mahadev ,Himachal Pradesh
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            12th(Intermediate),C.B.S.E
          </h4>
          <p>Scored - 70.4% in Non-Med</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: useColorModeValue("white", "grey") }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Shiwalik public University,Ropar,Punjab
          </h3>
          <h4 className="vertical-timeline-element-subtitle">10th(Matric)</h4>
          <p>Scored - 8.6 cgpa</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<AiFillStar />}
        />
      </VerticalTimeline>
    </>
  );
}

export default Timeline;
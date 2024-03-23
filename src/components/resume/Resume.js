import React, { useState } from "react";
import Title from "../layouts/Title";
import Skills from "./Skills";
import Education from "./Education";
import Target from "./Target";
import Experience from "./Experience";

const Resume = () => {
    const [skillData, setSkillData] = useState(true);
    const [educationData, setEducationData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [targetData, setTargetData] = useState(false);
    return (
        <section
            id="resume"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(true) &
                            setExperienceData(false) &
                            setTargetData(false)
                        }
                        className={`${
                            skillData
                                ? "border-designColor rounded-lg"
                                : "border-transparent"
                        } resumeLi`}
                    >
                        Professional Skills
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(true) &
                            setSkillData(false) &
                            setExperienceData(false) &
                            setTargetData(false)
                        }
                        className={`${
                            educationData
                                ? "border-designColor rounded-lg"
                                : "border-transparent"
                        } resumeLi`}
                    >
                        Education
                    </li>

                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(false) &
                            setExperienceData(true) &
                            setTargetData(false)
                        }
                        className={`${
                            experienceData
                                ? "border-designColor rounded-lg"
                                : "border-transparent"
                        } resumeLi`}
                    >
                        Experience
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(false) &
                            setExperienceData(false) &
                            setTargetData(true)
                        }
                        className={`${
                            targetData
                                ? "border-designColor rounded-lg"
                                : "border-transparent"
                        } resumeLi`}
                    >
                        Target
                    </li>
                </ul>
            </div>
            {skillData && <Skills />}
            {educationData && <Education />}
            {targetData && <Target />}
            {experienceData && <Experience />}
        </section>
    );
};

export default Resume;

import { ReactElement } from "react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Experience as ExperienceT } from '../types.dt'
import 'react-vertical-timeline-component/style.min.css';


interface ExperienceCardProps extends ExperienceT { }

const ExperienceCard = ({ date, iconBg, icon, company_name, title, points }: ExperienceCardProps): ReactElement => {
  return (
    <VerticalTimelineElement contentStyle={{
      background: '#1d1836',
      color: '#fff'
    }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={<div className="flex justify-center items-center w-full h-full">
        <img src={icon} alt={company_name} className="w-[60%] h-[60%] object-contain" />
      </div>}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="text-secondary text-[16px] font-semibold">{company_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
export const Experience = SectionWrapper((): ReactElement => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>What I have done fo far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index}{...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}, 'experience')

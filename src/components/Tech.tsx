import { ReactElement } from "react"
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

export const Tech = SectionWrapper((): ReactElement => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ icon }, index) => (
        <div className="w-28 h-28" key={index}>
          <BallCanvas icon={icon} />
        </div>
      ))}
    </div>
  )
}, 'tech')


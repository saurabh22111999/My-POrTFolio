import { motion } from "framer-motion"
import {TiArrowForward} from 'react-icons/ti'

const Feynn = () => {
  return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Intern <span className="text-textGreen tracking-wide">React</span></h3>

        <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2021 - Feb 2022</p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward/></span>
                        Developed and implemented a marketing software solution as a member of a
four-person team
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward/></span>
                        Involved in creating a full stack web-based product thereby developing a
deep understanding of all aspects of product development such as identifying
appropriate user requirements, designing a great user experience and building
appropriate data models and machine learning models along with relevant UI
components and backend design 
                </li>
            </ul>

    </motion.div>
  )
}

export default Feynn

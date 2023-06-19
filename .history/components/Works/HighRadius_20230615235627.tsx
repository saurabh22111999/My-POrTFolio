import { motion } from "framer-motion"
import {TiArrowForward} from 'react-icons/ti'

const HighRadius = () => {
  return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Intern <span className="text-textGreen tracking-wide">React</span></h3>

        <p className="text-sm mt-1 font-medium text-textDark">
            Jan 2022 - April 2022</p>
            <ul>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward/></span>
                Built and deployed an AI Enabled Fintech B2B Cloud Application 
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

export default HighRadius

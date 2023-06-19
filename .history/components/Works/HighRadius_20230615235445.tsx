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
                <li><span><TiArrowForward/></span>
                Built and deployed an AI Enabled Fintech B2B Cloud Application 
                </li>
            </ul>

    </motion.div>
  )
}

export default HighRadius

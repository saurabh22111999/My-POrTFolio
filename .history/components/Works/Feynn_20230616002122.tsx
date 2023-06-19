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
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Intern </h3>

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
                        AI Product/Service Prototyping 
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward/></span>
                        Market Segmentation using Machine Learning and Data Analysis 
                </li>
            </ul>

    </motion.div>
  )
}

export default Feynn

import { motion } from "framer-motion"
import {TiArrowForward} from 'react-icons/ti'

const Dev = () => {
    return (
        <motion.div
        initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.1}}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">Machine Learning Trainee<span className="text-textGreen tracking-wide">React</span></h3>
    
            <p className="text-sm mt-1 font-medium text-textDark">
            Jul 2021 - Aug 2021</p>
                <ul className="mt-6 flex flex-col gap-3">
                    <li className="text-base flex gap-2 text-textDark">
                        <span className="text-textGreen mt-1">
                            <TiArrowForward/></span>
                            Training program consisted of:
o Understanding Data
o ML Techniques
o Bias Variance Trade off
o XGboost
o Model Tuning
                    </li>
                    <li className="text-base flex gap-2 text-textDark">
                        <span className="text-textGreen mt-1">
                            <TiArrowForward/></span>
                            Other skill developed during the program:
o Git Workflow
o Markdown 
                    </li>
                    
                </ul>
    
        </motion.div>
      )
    }
    

export default Dev
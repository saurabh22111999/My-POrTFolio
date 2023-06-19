import { motion } from "framer-motion"

const HighRadius = () => {
  return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Intern <span>React</span></h3>
        <p>January 2022 - April 2022</p>
    </motion.div>
  )
}

export default HighRadius

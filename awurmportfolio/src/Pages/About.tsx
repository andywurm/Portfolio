import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div>Coming Soon</div>
        </motion.div>
    )
}
export default About
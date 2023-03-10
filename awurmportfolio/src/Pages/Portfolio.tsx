import { motion } from "framer-motion"

const Portfolio = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div>Portfolio</div>
        </motion.div>
    )
}
export default Portfolio
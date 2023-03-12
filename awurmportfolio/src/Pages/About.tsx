import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div style={{ height: "80vh", margin: "0 auto"}}>
                <div style={{height: "60%", position: "relative", top: "40%", color:"gray", fontSize: "1.2em"}}>Coming Soon</div>
            </div>
        </motion.div>
    )
}
export default About
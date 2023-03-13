import { motion } from "framer-motion"
import projects from '../PortfolioData/Projects'
import DisplayTimeline from "../Components/DisplayTimeline";

const Portfolio = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div style={{ height: "fit-content", width: "90%", margin: "0px auto", marginTop: '20px' }}>
                <div className="timeline">
                    <DisplayTimeline projects={projects}/>
                </div>
            </div>
        </motion.div >
    )
}
export default Portfolio
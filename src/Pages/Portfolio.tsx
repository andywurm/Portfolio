import { motion } from "framer-motion"
import projects from '../PortfolioData/Projects'
import DisplayTimeline from "../Components/DisplayTimeline";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../Styles/PortfolioStyles.css'

const Portfolio = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            id="portfolio"
        >
            <div style={{ height: "fit-content", width: "65%", margin: "0px auto", marginTop: '20px' }}>
                <div className="topLine"></div>
            </div>

            <div style={{ height: "fit-content", width: "90%", margin: "0px auto", marginTop: '20px' }}>
            <div className="topLine2"></div>
                <div className="timeline">
                <div className="projects">Projects</div>
                    <DisplayTimeline projects={projects} />
                </div>
            </div>
           
        </motion.div >
    )
}
export default Portfolio
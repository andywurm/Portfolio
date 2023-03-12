import { motion } from "framer-motion"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import '../Styles/PortfolioStyles.css'
import skate from '../Img/skater.png'

const Portfolio = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div style={{height:"80vh", width: "75%", margin: "0 auto", marginTop: '20px' }}>

                <div className="pageTitle">Here's what I've been up to...</div>

                <div className="portfolioContainer">

                    <div className="timeline">

                        <Timeline position="left">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                    <TimelineConnector style={{ height: '300px' }} />
                                </TimelineSeparator>
                                <TimelineContent style={{color: "gray" }}>Today</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={{color: "gray"}}>2022</TimelineContent>
                            </TimelineItem>
                        </Timeline>

                    </div>

                    <div className="projects">

                        <div>
                            <img className="projectImg" src={skate} alt="UTS" />
                            <div className="projectTitle">Up To Skate</div>
                        </div>

                        <div className="projectDate">Sep 2022 - Now</div>

                        <div className="goToWeb">
                            Link to Website: <span className="projectLink" onClick={() => window.open("https://uptoskate.onrender.com/")}>https://uptoskate.onrender.com/</span>
                        </div>
                        <div className="goToWeb">
                            Link to Repository: <span className="projectLink" onClick={() => window.open("https://github.com/andywurm/UpToSkate")}> https://github.com/andywurm/UpToSkate</span>
                        </div>

                        <div className="projectDesc">
                            <ul style={{padding:"20px", margin: "0"}}>
                                <li className="listed">Designed and implemented a website that allows users to keep up with the sport of Figure Skating using React TypeScript for the frontend and Node.js + Express on the backend.</li>
                                <li className="listed">Users can search and view skater information, upcoming events and past results. Thus all figure skating information is located all in one place.</li>
                            </ul>
                        </div>

                        <div className="techUsed">

                        </div>


                    </div>

                </div>

            </div>
        </motion.div>
    )
}
export default Portfolio
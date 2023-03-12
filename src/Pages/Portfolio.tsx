import { motion } from "framer-motion"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import '../Styles/PortfolioStyles.css'
import skate from '../Img/skater.png'
import drama from '../Img/DramaTrack.png'
import bkg from '../Img/projects.png'
import skateSite from '../Img/skateSite.png'
import dramaSite from '../Img/DramaSite.png'

const Portfolio = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            // style={{
            //     backgroundImage: 'url(' + bkg + ')',
            //     backgroundSize: 'cover',
            //     opacity: '0.2',
            //     // backgroundRepeat: 'no-repeat',
            //     imageRendering: "crisp-edges"
            // }}
        >
            <div style={{ height: "fit-content", width: "75%", margin: "0 auto", marginTop: '20px' }}>

                <div className="pageTitle">Here's what I've been up to...</div>

                <div className="portfolioContainer">

                    <div className="timeline">

                        <Timeline position="left">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{
                                        backgroundColor: '#af91ea'
                                    }} />
                                    <TimelineConnector style={{ height: '550px' }} />
                                </TimelineSeparator>
                                <TimelineContent style={{ color: "gray" }}>Today</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{
                                        backgroundColor: '#af91ea'
                                    }} />
                                    <TimelineConnector style={{ height: '500px' }} />
                                </TimelineSeparator>
                                <TimelineContent style={{ color: "gray" }}>2022</TimelineContent>
                            </TimelineItem>
                        </Timeline>

                    </div>

                    <div className="projects">

                        <div className="projectSep">

                            <div>
                                <img className="projectImg" src={skate} alt="UTS" />
                                <div className="projectTitle">Up To Skate</div>
                            </div>

                            <div style={{marginTop: '20px'}}>
                                <img className="projImage" src={skateSite} alt="UTS"/>
                            </div>

                            <div className="projectDate">Sep 2022 - Now</div>

                            <div className="goToWeb">
                                Website: <span className="projectLink" onClick={() => window.open("https://uptoskate.onrender.com/")}>https://uptoskate.onrender.com/</span>
                            </div>
                            <div className="goToWeb">
                                Repository: <span className="projectLink" onClick={() => window.open("https://github.com/andywurm/UpToSkate")}> https://github.com/andywurm/UpToSkate</span>
                            </div>

                            <div className="projectDesc">
                                    
                                    <div className="listed">Users can search and view skater information, upcoming events and past results. Thus all figure skating information is located all in one place.</div>

                                    <div className="tech"><b>Technology Used </b>: React, TypeScript, HTML/CSS, Node.js, Express.js</div>
                            </div>

                        </div>

                        {/* -------------------------------------- */}

                        <div className="projectSep">

                            <div>
                                <img className="projectImg" src={drama} alt="DT" />
                                <div className="projectTitle">Drama Tracker</div>
                            </div>

                            <div style={{marginTop: '20px'}}>
                                <img className="projImage" src={dramaSite} alt="DT"/>
                            </div>

                            <div className="projectDate">Feb - May 2022</div>

                            <div className="goToWeb">
                                Repository: <span className="projectLink" onClick={() => window.open("https://github.com/andywurm/DramaTracker")}> https://github.com/andywurm/DramaTracker</span>
                            </div>

                            <div className="projectDesc">
                                    <div className="listed">Allows users to track which Japanese shows or movies they have watched, are watching or plan to watch.
                                        The user is able to read up on the content, and decide which list they would like to add that show or movie to.
                                    </div>
                                    <div className="tech">
                                        <b>Technology Used:</b> React, JavaScript, HTML/CSS, Node.js, Express.js
                                    </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </motion.div>
    )
}
export default Portfolio
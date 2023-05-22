import { Projects } from "../PortfolioData/Projects"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import '../Styles/PortfolioStyles.css'

interface IDisplayTimelineProps {
    projects: Projects[]
}

const DisplayTimeline = (props: IDisplayTimelineProps) => {

    console.log(props.projects)
    return (
        <div className="displayTimeline">
            <div className="largerTimeline">
                {props.projects.map((item: Projects) => {
                    return (
                        <Timeline sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: 0.2,
                            },
                        }}>
                            <TimelineItem>
                                <TimelineOppositeContent color="textSecondary">
                                    {item.status}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: '#af91ea' }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className="projectSep">
                                        <div>
                                            <img className="projectImg" src={`./${item.projectLogo}`} alt="UTS" />
                                            <div className="projectTitle">{item.projectName}</div>
                                        </div>

                                        <div style={{ marginTop: '20px' }}>
                                            <img className="projImage" src={`./${item.projectImg}`} alt="UTS" />
                                        </div>

                                        <div className="projectDate">{item.projectDate}</div>

                                        {item.projectWebsite ? <div className="goToWeb"> Website: <span className="projectLink" onClick={() => window.open(`${item.projectWebsite}`)}>{item.projectWebsite}</span>
                                        </div>
                                            : null}

                                        <div className="goToWeb">
                                            Repository: <span className="projectLink" onClick={() => window.open(`${item.projectRepository}`)}> {item.projectRepository} </span>
                                        </div>

                                        <div className="projectDesc">
                                            <div className="listed">{item.projectDescription}</div>
                                            <div className="tech"><b>Technology Used </b>: {item.projectTech}</div>
                                        </div>

                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>

                    )
                })}
            </div>

            <div className="smallerTimeline">
                {props.projects.map((item: Projects) => {
                    return (
                        <div>
                            <div className="projectSep">
                                <div className="projectHeader">
                                    <img className="projectImg" src={`./${item.projectLogo}`} alt="UTS" />
                                    <div className="projectTitle">{item.projectName}</div>
                                </div>

                                <div style={{ marginTop: '20px' }}>
                                    <img className="projImage" src={`./${item.projectImg}`} alt="UTS" />
                                </div>

                                <div className="projectDate">{item.projectDate}</div>

                                {item.projectWebsite ? <div className="goToWeb"> Website: <span className="projectLink" onClick={() => window.open(`${item.projectWebsite}`)}>{item.projectWebsite}</span>
                                </div>
                                    : null}

                                <div className="goToWeb">
                                    Repository: <span className="projectLink" onClick={() => window.open(`${item.projectRepository}`)}> {item.projectRepository} </span>
                                </div>

                                <div className="projectDesc">
                                    <div className="listed">{item.projectDescription}</div>
                                    <div className="tech"><b>Technology Used </b>: {item.projectTech}</div>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default DisplayTimeline
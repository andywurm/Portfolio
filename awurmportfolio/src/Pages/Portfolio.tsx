import { motion } from "framer-motion"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Portfolio = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div>

                <Timeline position="left">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="primary" />
                            <TimelineConnector style={{height: '500px'}}/>
                        </TimelineSeparator>
                        <TimelineContent>Present</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary"/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>2022</TimelineContent>
                    </TimelineItem>
                </Timeline>

            </div>
        </motion.div>
    )
}
export default Portfolio
import { motion } from "framer-motion"
import '../Styles/AboutStyles.css'
import pfp from '../Img/MyPfp.png'
import test from '../Img/About.png'

const About = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            style={{
                backgroundImage: 'url(' + test + ')',
                backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                imageRendering: "crisp-edges"
            }}

        >
            <div style={{ height: "75vh", margin: "0 auto" }}>
                <div className="aboutContainer">

                    <div className="pictureAbout">
                        <img src={pfp} alt='me' className="aboutImg" />
                    </div>

                    <div className="textAbout">

                        <div className="aText">

                            <div className="hiText"><b>Hi, my name is <span style={{ color: '#BD9DFF' }}>Andaiye</span>!</b>
                                <br />
                            </div>

                            <div className="ps">
                                <div className="aboutP">
                                    I am a software engineer / frontend developer with a background in art. 
                                    I like to design and create beautiful web applications using React and other frontend technology.
                                </div>

                                <div className="aboutP">
                                    I am open to learning new things and using the skills I have acquired to build new, creative and interesting products.
                                </div>
                            </div>


                            <div className="aboutT">
                                <b>Technology:</b> <span className="listedA">React, Bootstrap, Material UI, Github/GitLab, Node.js, Express, SequelizeORM, Unity</span>
                                <br />
                                <b>Languages:</b> <span className="listedA">HTML, CSS, SASS, JavaScript, TypeScript, Java, C#, Python</span>
                                <br />
                                <b>Skills:</b> <span className="listedA"> Figma, Sketch, Adobe Illustrator, Slack, Trello, Zoom</span>
                            </div>

                            <div className="resumeHere">Check out my <span className="resumeLink" onClick={() => window.open("https://docs.google.com/document/d/1eenSs-CFLv9ssMDn--Uwngyl5BfwHH6RV9RzW2N3eVQ/edit?usp=sharing")}>resume</span> here! </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div >
    )
}
export default About
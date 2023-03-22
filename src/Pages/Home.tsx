import { motion } from "framer-motion"
import verified from '../Img/verifiedBadge.png'
import pfp from '../Img/MyPfp.png'
import { useNavigate } from "react-router-dom"
import { Paper } from "@mui/material"
import '../Styles/HomeStyles.css'
// import bkg from '../Img/Backgrounds.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesDown, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import myart from '../Img/myart1.png'
import myart2 from '../Img/myart2.png'
import myart3 from '../Img/myart3.png'

const Home = () => {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/Contact')
    }

    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        // style={{
        //     width: "100%",
        //     backgroundImage: 'url(' + bkg + ')',
        //     backgroundSize: 'cover',
        //     opacity: '0.2',
        //     // backgroundRepeat: 'no-repeat',
        //     imageRendering: "crisp-edges"
        // }}
        >
            <div style={{ width: "70%", height: "fit-content", margin: "0 auto", padding: "100px 0" }}>
                <div className="homeContainer">

                    <div className="homeInfo">
                        <div className="allInfo">
                            <div className="keep">
                                <h1 className="myName">Andaiye Wurm</h1>
                                <img className="verify" src={verified} alt='badge' />
                                <h3 className="pronouns">(She/Her)</h3>
                            </div>
                            <h2 className="location"> New York, NY</h2>

                            <div className="homeText">Looking for work as a Software Engineer or Frontend Developer.</div>
                        </div>
                    </div>

                    <div className="homeCard">
                        <div className="circle"></div>
                        <Paper elevation={3} className="paper">
                            <div style={{ display: 'flex', flexDirection: "row", padding: "20px 20px" }}>
                                <img className="pfp" src={pfp} alt="Me" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                                <button onClick={() => handleClick()}>+ Connect</button>
                            </div>
                        </Paper>

                    </div>

                </div>

            </div>

            <div className="scrollDwn4">
                <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "1.8em" }} />
            </div>
            <div className="scrollDwn3">
                <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "1.8em" }} />
            </div>
            <div className="scrollDwn2">
                <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "1.8em" }} />
            </div>

            <div className="scrollDwn">
                <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "1.8em" }} />
            </div>

            <div className="aboutMe">
                <div className="about"><FontAwesomeIcon icon={faCircleExclamation} className='warning' />About Me</div>

                <div className="points"><span className="under">Engineering</span>:
                    <div className="aboutText">I am a Software Engineer / Frontend Developer with a background in art. I like to design and create beautiful web applications using React and other frontend technology.
                    </div>
                </div>

                <div className="points"><span className="under">Design</span>:
                    <div className="aboutText">As I stated I have a background in art. This means that I have an eye for design. I can tell when things look good or not. I can identify areas that need improvement and how to improve them if needed.
                    </div>
                </div>

                <div className="points"><span className="under">Art</span>:
                    <div className="aboutText">In addition to engineering and design I also like to draw! Check out some of my art below!
                    </div>
                </div>

                <div className="myArt">

                        <img src={myart} alt="drawing" className="art"/>
                        <img src={myart2} alt="drawing" className="art"/>
                        <img src={myart3} alt="drawing" className="art"/>

                </div>

            </div>


        </motion.div>
    )
}
export default Home
import { motion } from "framer-motion"
import '../Styles/AboutStyles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesDown, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import myart from '../Img/myart1.png'
import myart2 from '../Img/myart2.png'
import myart3 from '../Img/myart3.png'

const About = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}


        >
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
        </motion.div >
    )
}
export default About
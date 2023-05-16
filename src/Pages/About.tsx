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
                    <div className="aboutText">
                    I am a passionate Software Engineer / Frontend Developer who merges my artistic background with technical skills to craft visually captivating web applications. With expertise in React and various frontend technologies, I take joy in designing and developing stunning user interfaces that seamlessly blend form and functionality. 
                    </div>
                </div>

                <div className="points"><span className="under">Design</span>:
                    <div className="aboutText">With a solid foundation in art, I possess a keen eye for design that allows me to discern aesthetics with precision. Recognizing what appeals visually to users and what could benefit from enhancements comes naturally to me.
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
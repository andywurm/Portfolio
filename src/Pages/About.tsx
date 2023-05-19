import { motion } from "framer-motion"
import '../Styles/AboutStyles.css'
import myart from '../Img/myart1.png'
import myart2 from '../Img/myart2.png'
import myart3 from '../Img/myart3.png'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PaletteIcon from '@mui/icons-material/Palette';
import DevicesIcon from '@mui/icons-material/Devices';
import drawing from '../Img/drawing.png'
import code from '../Img/code.png'
import palette from '../Img/palette.png'

const About = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            id="about"

        >
            <div className="aboutMe">
                <div className="topLine"></div>
                <div className="about">About</div>

                <div className="categories">

                    <div className="outerpoint">
                        <div className="iconic">
                            <img src={code} alt="code" className="icon" />
                        </div>
                        {/* <div className="aboutText">Code</div> */}
                        <div className="points">
                            I am a Software Engineer who merges my artistic and technical skills to craft visually captivating web applications.
                        </div>
                    </div>

                    <div className="outerpoint">
                        <div className="iconic">
                            <img src={drawing} alt="design" className="icon" />
                        </div>
                        {/* <div className="aboutText">Design</div> */}
                        <div className="points">
                            With a solid foundation in art, I possess a keen eye for design. Recognizing what appeals visually to users comes naturally to me.
                        </div>
                    </div>

                    <div className="outerpoint">
                        <div className="iconic">
                            <img src={palette} alt="art" className="icon"/>
                        </div>
                        {/* <div className="aboutText">Art</div> */}
                        <div className="points">
                            In addition to engineering and design I also like to draw! <br/> <br/> Check out some of my art below!
                        </div>
                    </div>

                </div>

                <div className="artpls">No Artwork Yet</div>

            </div>
        </motion.div >
    )
}
export default About
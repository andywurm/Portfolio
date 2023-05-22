import { motion } from "framer-motion"
import verified from '../Img/verifiedBadge.png'
import pfp from '../Img/MyPfp.jpg'
import { useNavigate } from "react-router-dom"
import { Paper } from "@mui/material"
import '../Styles/HomeStyles.css'
// import x from '../Img/remove.png'
// import bkg from '../Img/Backgrounds.png'


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

            id="home"
            
        >
            <div className="homeHome">
                <div className="homeContainer">

                <div className="homeCard">
                    <div style={{ display: 'flex', flexDirection: "row", padding: "20px 20px" }}>
                                <img className="pfp" src={pfp} alt="Me" />
                            </div>
                    </div>

                    <div className="homeInfo">
                        <div className="allInfo">
                            <div className="keep">
                                <h1 className="myName">Andaiye Wurm</h1>
                                <img className="verify" src={verified} alt='badge' />
                                <h3 className="pronouns">(She/Her)</h3>
                            </div>
                            <h2 className="location"> New York, NY</h2>

                            <div className="homeText"> Actively seeking opportunities as a Software Engineer or Frontend Developer.</div>
                        </div>
                    </div>

                   

                </div>

            </div>

        </motion.div>
    )
}
export default Home
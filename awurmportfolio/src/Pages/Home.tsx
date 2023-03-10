import { motion } from "framer-motion"
import verified from '../Img/verifiedBadge.png'
import pfp from '../Img/Me.png'
import { useNavigate } from "react-router-dom"
import { Paper } from "@mui/material"
import '../Styles/HomeStyles.css'

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
            style={{ height: "80vh", width: "75%", margin: "0 auto" }}
        >

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

        </motion.div>
    )
}
export default Home
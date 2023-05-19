import zIndex from '@mui/material/styles/zIndex';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-scroll'

const Navigation = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                position: "fixed",
                backgroundColor: "white",
                // border: 'solid red 1px',
                zIndex: "100"
            }}>
                
            <h1 className="websiteName" style={{
                width: "30%",
                fontWeight: '500',
                fontSize: "2.3em",
                paddingLeft: "5%"
            }}>

                <NavLink to='/' style={{
                    float: "left",
                    textDecoration: "none",
                    color: "#9E8EFF",
                    fontWeight: "bold"
                }}>AW
                </NavLink>
            </h1>

            <div className="topLinks" style={{
                width: "70%",
                height: "100%",
                fontSize: "1.2em",
                display: "inline-block",
            }}>

                <div style={{ textAlign: "right", marginRight: '20px' }}>
                    <Link to="home" spy={true} smooth={true} offset={-200} duration={500} className="Links" style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>Home</Link>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="Links" style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>About</Link>
                    <Link to="portfolio" spy={true} smooth={true} offset={-110} duration={500} className="Links" style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>Portfolio</Link>
                    <Link to="contact" spy={true} smooth={true} offset={-40} duration={500} className="Links" style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>Contact</Link>
                </div>
            </div>

        </motion.div>
    )
}
export default Navigation
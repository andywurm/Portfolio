import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

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
                // border: 'solid red 1px'
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
                }}>Andaiye Wurm
                </NavLink>
            </h1>

            <div className="topLinks" style={{
                width: "70%",
                height: "100%",
                fontSize: "1.2em",
                display: "inline-block",
            }}>

                <div style={{ textAlign: "right", marginRight: '20px' }}>
                    <NavLink className="Links" to='/' style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>Home</NavLink>
                    <NavLink className="Links" to='/About' style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>About</NavLink>
                    <NavLink className="Links" to='/Portfolio' style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>Portfolio</NavLink>
                    <NavLink className="Links" to='/Contact' style={{ display: "inline-block", padding: "4%", textDecoration: "none" }}>Contact</NavLink>
                </div>
            </div>

        </motion.div>
    )
}
export default Navigation
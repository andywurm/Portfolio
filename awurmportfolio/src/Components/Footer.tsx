import { motion } from 'framer-motion';

const Footer = () => {
    return(
        <motion.div

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

        style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            color: "#8E8E8E"
        }}>
        <div style={{padding: "20px"}}>Last Updated : March 2023</div>
        </motion.div>
    )
}
 export default Footer
import { motion } from "framer-motion"
import '../Styles/ContactStyles.css'
import gh from '../Img/25231.png'
import li from '../Img/174857.png'
import { useState } from "react"
import emailjs from 'emailjs-com';

const Contact = () => {

    const [sent, setSent] = useState(false);

    function handleClick(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_mwp7ucd', 'template_xwdev3p', e.currentTarget, '1jdI11zU_-WBm37Az')
            .then((result) => {

            }, (error) => {
                console.log(error.text);
            });

        setSent(!sent)
    }

    const Sent = () => {
        return (
            <div className="messageContainer">
                <div
                // style={{ margin: '0 auto' }}
                >
                    <div className="messageBorder">
                        <div className="stayConnected" style={{ marginTop: "15%", fontSize: "2.5em" }}>Thank you!</div>
                        <div style={{ textAlign: 'left', height: '50%' }}>
                            <div className="sentMessage">Your message was sent.
                                <br /> <br />I will get back to you as soon as possible. In the meantime, feel
                                free to check out my LinkedIn and Github.
                                <br /> <br /> Have a nice day! :)</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        // style={{border: 'solid red 1px'}}
        >
            <div style={{ height: "80vh", width: "95%", margin: "0 auto" }}>
                <div className="contactContainer">

                    <div className="textContainer">
                        <div style={{ margin: "0 auto" }}>
                            <div className="connectText">Interested? <br /> Let's <span style={{ color: "#BD9DFF" }}>Connect.</span></div>
                            <div>
                                <img className="cLogo" src={gh} alt="github" onClick={() => window.open("https://github.com/andywurm?tab=repositories")} />
                                <img className="cLogo" src={li} alt="linkedin" onClick={() => window.open("https://www.linkedin.com/in/andaiye-wurm-5bb375209/")} />
                            </div>
                        </div>
                    </div>

                    {sent ? <Sent /> :

                        <div className="messageContainer">
                            <div
                            // style={{ margin: '0 auto' }}
                            >
                                <div className="messageBorder">
                                    <form onSubmit={handleClick}>
                                        <div className="stayConnected">Contact Me</div>

                                        <input className="in" placeholder="Full Name *" name="from_name" required />
                                        <input className="in" placeholder="Email *" name="from_email" required />
                                        <textarea className="in messageIn" placeholder="Type your message here..." name="their_message" />

                                        <button style={{ borderRadius: "3px", border: 'none' }} type='submit'>Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    }

                </div>
            </div>

        </motion.div>

    )
}
export default Contact
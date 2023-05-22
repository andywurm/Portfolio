
import '../Styles/AboutStyles.css'
import myart from '../Img/myart1.png'
import myart2 from '../Img/myart2.png'
import myart3 from '../Img/myart3.png'
import myart4 from '../Img/myart4.png'
import myart5 from '../Img/myart5.png'
import myart6 from '../Img/myart6.png'
import myart7 from '../Img/myart7.png'
import drawing from '../Img/drawing.png'
import code from '../Img/code.png'
import palette from '../Img/palette.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from "react"

let artList = [myart, myart2, myart3, myart4, myart5, myart6, myart7]

const About = () => {

    const [index, setIndex] = useState(0)
    // const [images, setImages] = useState(artList.slice(0, 3))

    useEffect(() => {
        // setImages(artList.slice(index,index+3))
    }, [index])

    function moveForward() {
        if (index + 2 !== artList.length - 1) {
            setIndex(index + 1)
        }
    }

    function moveBack() {
        if (index !== 0) {
            setIndex(index - 1)
        }
    }

    function moveForward1() {
        if (index !== artList.length - 1) {
            setIndex(index + 1)
        }
    }

    function moveBack1() {
        if (index !== 0) {
            setIndex(index - 1)
        }
    }

    return (
        <div

            id="about"

        >
            <div className="aboutMe">
                <div className="topLine"></div>
                <div className="topLine2"></div>
                <br />
                <br />
                {/* <div className="about">About</div> */}

                <div className='aboutText'>
                    <p>
                        I am a passionate <b>Software Engineer</b> who merges my artistic background with technical skills to craft visually captivating web applications. With expertise in <b>React</b> and various <b>frontend technologies</b>, I take joy in designing and developing stunning <b>user interfaces</b> that seamlessly blend form and functionality.
                    </p>

                    <p>With a solid foundation in <b>art</b>, I possess a keen eye for <b>design</b> that allows me to discern aesthetics with precision. Recognizing what appeals visually to users and what could benefit from enhancements comes naturally to me.
                    </p>

                    Check out my art <b>below</b>!
                </div>

                {/* <div className="categories">

                    <div className="outerpoint">
                        <div className="iconic">
                            <img src={code} alt="code" className="icon" />
                        </div>

                        <div className="points">
                            I am a Software Engineer who merges my artistic and technical skills to craft visually captivating web applications.
                        </div>
                    </div>

                    <div className="outerpoint">
                        <div className="iconic">
                            <img src={drawing} alt="design" className="icon" />
                        </div>

                        <div className="points">
                            With a solid foundation in art, I possess a keen eye for design. Recognizing what appeals visually to users comes naturally to me.
                        </div>
                    </div>

                    <div className="outerpoint">
                        <div className="iconic">
                            <img src={palette} alt="art" className="icon" />
                        </div>

                        <div className="points">
                            In addition to engineering and design I also like to draw! <br /> <br /> Check out some of my art below!
                        </div>
                    </div>

                </div> */}

                <br />

                <div className="slides">

                    <div className="clickme" onClick={moveBack} style={{ color: index === 0 ? 'lightgray' : 'black' }}><ArrowBackIcon /></div>

                    <div className="myArt">
                        <img src={artList[index]} alt="art" className="art" />
                    </div>
                    <div className="myArt">
                        <img src={artList[index + 1]} alt="art" className="art" />
                    </div>
                    <div className="myArt">
                        <img src={artList[index + 2]} alt="art" className="art" />
                    </div>

                    <div className="clickme" onClick={moveForward} style={{ color: index + 2 === artList.length - 1 ? 'lightgray' : 'black' }}><ArrowForwardIcon /></div>

                </div>

                <div className="smallSlides">

                    <div className="theArt">

                        <div className="myArt">
                            <img src={artList[index]} alt="art" className="art" />
                        </div>

                    </div>

                    <div className="holdBtn">
                        <div className="clickme" onClick={moveBack1} style={{ color: index === 0 ? 'lightgray' : 'black' }}><ArrowBackIcon /></div>

                        <div className="clickme" onClick={moveForward1} style={{ color: index === artList.length - 1 ? 'lightgray' : 'black' }}><ArrowForwardIcon /></div>
                    </div>

                </div>

            </div>
        </div >
    )
}
export default About
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faLaravel,
  faPhp,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import CV from './cv.pdf'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const openResume = () => {
    const resumePath = process.env.PUBLIC_URL + CV;
    window.open(resumePath, '_blank');
  };
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            "My name is Souhail Elqasir. I am 20 years old and I am a full-stack web developer.
            I recently graduated this year,
            which has strengthened my programming skills
            and my passion for creating innovative websites.
          </p>
          <p align="left">
            With a solid experience in front-end and back-end development,
            as well as database management,
            I am determined to provide effective technical solutions
            to all projects I participate in.
          </p>
          <p>
            My commitment to continuous learning and my desire
            to explore new technologies make me an ideal candidate
            for exciting challenges in the world of web development."
          </p>
          <button className='resume-button' onClick={openResume}>My Resume</button>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPhp} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faLaravel} color="#EC4D28" />
            </div>
          </div>
        </div>

      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About
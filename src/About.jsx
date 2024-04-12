import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className='Abtpage'>

      <div className="Aboutbox1">
        <div className="AboutTitle">
          <h1 className="usus">ABOUT ME</h1>
          <ul>
            <Link to='/Contact' className='ena'>                                     <li className='ena'>Contact Us</li>   </Link>
            <Link to='https://trucks.cardekho.com/' target='_blank' className='ena'> <li className='ena'>Explore More</li> </Link>
          </ul>
        </div>

      </div>


      <div className="Aboutbox2">

        <div className="MyImgBox">
          <img src="./Images/ContactMe.png" alt="Sriram Anime" className='SriramAnime'/>
        </div>

        <div className="allme">

          <div className="parapara">

            <p className='paragraph'>Hi,</p>

            <p className='paragraph1'>
              I am <span className='JFD'>Sriram Kannan</span>, a recent graduate specializing in the most famous and my favourate technology <span className='JFD'>Java Full Stack Development</span>.
              Keen to be contributing for developing cutting-edge projects and I genuinely enthusiastic about the opportunity to bring
              my skills to your organization, widely renowned for its consistent innovation and unwavering commitment to excellence.
              I am particularly eager to contribute to a team that truly values innovation and consistently sets exceptionally high
              standards of excellence, all while performing adeptly as a Software Developer or Full Stack Developer.
            </p>

            <p className='paragraph1'>
              Key Skills :-
            </p>

            <p className="paragraph2">
              React.js, Angular, SpringBoot, MySQL, Basics in DBMS, Postman, Java, JavaScript, Python, C++, HTML and CSS
            </p>

          </div>

          <div className="socialMedia">

            <div className="alignment">              
              <img src=".\Images\LogoGithub.png"      alt="Github"  title='GitHub'     className='SocialLogo'/>

              <a href="https://github.com/SriramKannan04" target="_blank" rel="noopener noreferrer">
                <img src=".\Images\LogoGithub2.png"   alt="Github"  title='GitHub'     className='SocialLogo2'/>
              </a>
            </div>

            <div className="alignment">              
              <img src=".\Images\LogoLinkedIn.png"   alt="LinkedIn"  title='LinkedIn'  className='SocialLogo'/>

              <a href="https://www.linkedin.com/in/sriram-kannan-913458247/" target="_blank" rel="noopener noreferrer">
                <img src=".\Images\LogoLinkedIn2.png" alt="LinkedIn" title='LinkedIn'  className='SocialLogo2'/>
              </a>
            </div>

            <div className="alignment">              
              <img src=".\Images\LogoInsta.png"      alt="Instagram"   title='Instagram' className='SocialLogo'/>

              <a href="https://www.instagram.com/sriram_mr.imperfect?utm_source=qr&igsh=YWJ3NXo0YXh0MGc2" target="_blank" rel="noopener noreferrer">
                <img src=".\Images\LogoInsta2.png"    alt="Instagram"  title='Instagram' className='SocialLogo2'/>
              </a>
            </div>

            <div className="alignment">       
              <img src=".\Images\LogoMail.png"       alt="Mail Me"  title='Mail Me' className='SocialLogo'/>  

              <a href="mailto:sriramkannan04@outlook.com">
                <img src=".\Images\LogoMail2.png"    alt="Mail Me"  title='Mail Me' className='SocialLogo2'/>
              </a>

            </div>

          </div>
          
        </div>
      </div>   

    </div>
  )
}

export default About
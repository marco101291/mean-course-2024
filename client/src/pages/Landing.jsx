import Wrapper from "../assets/wrappers/LandingPage";
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from "react-router-dom";
import { Logo } from "../components";




const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job<span>tracking</span>app
            </h1>
          <p>I'm baby ethical neutra four loko pug. Ethical neutra taiyaki truffaut brunch. Drinking vinegar waistcoat chicharrones authentic sartorial. Banh mi godard fam, try-hard beard taiyaki man bun you probably haven't heard of them cornhole. Pinterest shaman mustache authentic. Forage direct trade kale chips, bitters yes plz Brooklyn bushwick keytar kinfolk schlitz readymade green juice fixie.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
    
  )
}


export default Landing
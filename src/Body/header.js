import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from "./Home"
import Projects from "./Projects"

const Header = () =>{
    return(
        <>
            <div id="home">
                <Home/>
            </div>
            <div id="about">
                <About/>
            </div>
                <br/><br/><br/>
            <div id="projects">
                <Projects/>
            </div>
                <br/><br/><br/>
            <div id="blog">
                <Blog/>
            </div>
                <br/><br/><br/>
            <div id="contact">
                <Contact/>
            </div>
                <br/><br/><br/>
            <div id="footer">
                <Footer/>
            </div>
        </>
    )
}
export default Header
import Pavan from '../pavan.jpg';
import '../Bodycss/Home.css';
const Home = () =>{
    return(
        <div className="home_header">
         <div className="home_left">
               <p className="fit">Welcome! I'M</p>
               <h1 className="fit">Pavan Sai</h1>
               <h5 className="fit">Front-End-Developer</h5>
               <p className="p1">I am a Frontend Developer. Highly dedicated and hardworking. Most of the time I am busy working on my HTML,CSS,and React Skills.</p><br/>
               
         </div>
         <div className="home_right">
            <img src={Pavan} alt="Pavan"/>
         </div>
        </div>
    )
}
export default Home
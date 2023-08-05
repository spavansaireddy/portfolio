import '../Bodycss/About.css'
const About = () =>{
    const data = [
        {
            id :1,
            img:"https://cdn-icons-png.flaticon.com/128/1021/1021220.png",
            h1:"02",
            txt:"Awards"
        },
        {
            id :2,
            img:"https://cdn-icons-png.flaticon.com/128/1605/1605350.png",
            h1:"05+",
            txt:"Clients"
        },
        {
            id :3,
            img:"https://cdn-icons-png.flaticon.com/128/2359/2359722.png",
            h1:"02",
            txt:"Years Experience"
        },
        {
            id :4,
            img:"https://cdn-icons-png.flaticon.com/128/4946/4946348.png",
            h1:"10+",
            txt:"Projects"
        }

    ]
    return(
        <>
        <p className="ap">AB<span style={{color:'green'}}>O</span>UT</p><br/>
        <div className="abt">
          {
            data.map((inner)=>(
                <div key={inner.id} className="data_header">
                  <div className="data_left">
                     <img src={inner.img} alt="images"/>
                  </div>
                  <div className="data_right">
                      <span id="h1">
                         <h1>{inner.h1}</h1>
                      </span>
                      <span id="p">
                        <p>{inner.txt}</p>
                      </span>
                  </div>
                </div>
            ))
          }
        </div>
        </>
    )
}
export default About
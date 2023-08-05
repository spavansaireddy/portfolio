import '../Bodycss/Projects.css'
const Projects = () =>{
    const projects = [
        {
            id:1,
            Image:"https://cdn-icons-png.flaticon.com/128/2756/2756414.png",
            h2:"Contacts",
            live:"https://contacts-nine-lilac.vercel.app/",
            code:"https://github.com/spavansaireddy/contacts"
        },
        {
            id:2,
            Image:"https://cdn-icons-png.flaticon.com/128/5760/5760438.png",
            h2:"Histogram",
            live:"https://histo-two.vercel.app/",
            code:"https://github.com/spavansaireddy/histo"
        },
        {
            id:3,
            Image:"https://cdn-icons-png.flaticon.com/128/2163/2163350.png",
            h2:"Housing",
            live:"https://p-s-r-housing-private-limited.vercel.app/",
            code:"https://github.com/spavansaireddy/P.S.R-Housing-Private-Limited"
        },
        {
            id:4,
            Image:"https://cdn-icons-png.flaticon.com/128/681/681803.png",
            h2:"News",
            live:"https://teleport-945s.vercel.app/",
            code:"https://github.com/spavansaireddy/News"
        }
    ]
    return(
        <>
         <p className="pp">PRO<span style={{color:'red'}}>JECTS</span></p><br/>
        <div className="Project_header">
           
         {
            projects.map((pInner)=>(
                <div className="pLeft" key={pInner.id}>
                   <img src={pInner.Image} alt="Inter"/>
                   <span>
                     <h2>{pInner.h2}</h2><br/>
                     <a href={pInner.live} target="_blank" rel="noreferrer">Live Link</a><br/><br/>
                     <a href={pInner.code} target="_blank" rel="noreferrer">Code</a>
                   </span>
                </div>
            ))
         }
        </div>
        </>
    )
}
export default Projects
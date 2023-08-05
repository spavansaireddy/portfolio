import '../Bodycss/Blog.css';
const Blog = () =>{
    const bskils = [
        {
          id:1,
          img:"https://cdn-icons-png.flaticon.com/128/732/732212.png",
          txt:"HTML"
        },
        {
            id:2,
            img:"https://cdn-icons-png.flaticon.com/128/732/732190.png",
            txt:"CSS"
        },
        {
            id:3,
            img:"https://cdn-icons-png.flaticon.com/128/5486/5486397.png",
            txt:"JS"
        },
        {
            id:4,
            img:"https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
            txt:"React"
        },
        {
            id:5,
            img:"https://cdn-icons-png.flaticon.com/128/226/226777.png",
            txt:"Java"
        },
        {
            id:6,
            img:"https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
            txt:"Python"
        },
        {
            id:7,
            img:"https://cdn-icons-png.flaticon.com/128/1015/1015322.png",
            txt:"PowerBi"
        },
        {
            id:8,
            img:"https://cdn-icons-png.flaticon.com/128/5968/5968520.png",
            txt:"PhotoShop"
        }
    ]
    return(
        <>
         <p className="bp">SKILLS</p><br/>
          <div>
                <ul className='Skills_inner'>
                    {
                        bskils.map((Bler)=>(
                            <div key={Bler.id} className="Skills_left">
                              <li><img src={Bler.img} alt="Skills"/></li>
                              <span><li>{Bler.txt}</li></span>
                            </div>
                        ))
                    }
                </ul>
          </div>
        </>
    )
}
export default Blog
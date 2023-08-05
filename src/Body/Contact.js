import '../Bodycss/Contact.css';
const Contact = () =>{
    const Clist = [
        {
            id:1,
            img:"https://cdn-icons-png.flaticon.com/128/3670/3670051.png",
            link:"https://wa.me/9949421162",
            txt:"Whatsapp"
        },
        {
            id:2,
            img:"https://cdn-icons-png.flaticon.com/128/174/174855.png",
            link:"https://www.instagram.com/pavan_sai_0424/",
            txt:"Instagram"
        },
        {
            id:3,
            img:"https://cdn-icons-png.flaticon.com/128/174/174857.png",
            link:"https://www.linkedin.com/in/pavan-sai-reddy-seelam-211374238/",
            txt:"LinkedIn"
        },
        {
            id:4,
            img:"https://cdn-icons-png.flaticon.com/128/733/733547.png",
            link:"https://www.facebook.com/profile.php?id=100009689499244",
            txt:"Facebook"
        }
    ]
    return(
        <div>
            <p id="cp">CONTACT ME THROUGH SOCIAL MEDIA</p><br/>
            <div className="Contact_header">
            {
                Clist.map((Cdata)=>(
                    <div key={Cdata.id} className="Contact_left">
                            <img src={Cdata.img} alt="Touch"/>
                            <span id="span1">
                                <a href={Cdata.link} target="_blank" rel="noreferrer">{Cdata.txt}</a>
                            </span>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
export default Contact